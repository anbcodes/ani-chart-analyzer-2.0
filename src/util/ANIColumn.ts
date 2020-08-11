interface ANIRow {
    number: number;
    text: string;
    isMain: boolean;
    symbol: string;
}

class ANIColumn {
    topics: ANIRow[];

    rows: ANIRow[];

    sortedRows: ANIRow[];

    get symbols() {
      return [...new Set(this.rows.map((v) => v.symbol))];
    }

    get summary() {
      return this.topics.map((row) => `<li>${row.text} (${row.symbol}): ${this.countOfSymbol(row.symbol)}</li>`);
    }

    constructor(public table: HTMLTableElement, public offset: number) {
      console.log(...table.children[1].children);
      this.rows = [...table.children[1].children]
        .slice(1)
        .map((row) => ({
          number: +this.textOf(row.children[0]),
          symbol: this.textOf(row.children[offset]).replace('M', ''),
          isMain: /M/g.test(this.textOf(row.children[offset])),
          text: this.textOf(row.children[offset + 1]),
        }));
      console.log(this.rows);

      this.sortedRows = [...this.rows]
        .sort((a, b) => this.symbols.indexOf(a.symbol) - this.symbols.indexOf(b.symbol));

      const foundSymbols = [] as Array<string>;
      this.topics = this.rows
        .filter((row) => {
          if (foundSymbols.includes(row.symbol)) {
            foundSymbols.push(row.symbol);
            return row.isMain;
          }
          foundSymbols.push(row.symbol);
          return true;
        });
    }

    countOfSymbol(symbol: string): number {
      return this.rows.reduce((c, v) => (v.symbol === symbol ? c + 1 : c), 0);
    }

    sortedColumn(table = this.table.cloneNode(true) as HTMLTableElement): HTMLTableElement {
      [...table.children[1].children].slice(1).forEach((row, i) => {
        console.log(row);
        const spans = [...row.children].map((v) => v.querySelector('span'));
        if (spans[0]) {
          console.log(spans);
        }
        const zero = spans[0];
        const offset = spans[this.offset];
        const offset1 = spans[this.offset + 1];
        if (zero && offset && offset1) {
          // zero.innerText = '';
          offset.innerText = this.sortedRows[i].symbol;
          offset1.innerText = this.sortedRows[i].text;
        }
      });

      return table;
    }

    private textOf(el: Element): string {
      return (el as HTMLElement).innerText.trim();
    }
}

export default ANIColumn;
