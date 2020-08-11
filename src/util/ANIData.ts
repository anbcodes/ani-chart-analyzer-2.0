import ANIColumn from './ANIColumn';

class ANIData {
    AColumn: ANIColumn;

    NColumn: ANIColumn;

    IColumn: ANIColumn;

    constructor(htmlTable: HTMLTableElement) {
      this.AColumn = new ANIColumn(htmlTable, 1);
      this.NColumn = new ANIColumn(htmlTable, 3);
      this.IColumn = new ANIColumn(htmlTable, 5);
    }

    reorderedTable(): HTMLTableElement {
      const table = this.AColumn.sortedColumn();
      this.NColumn.sortedColumn(table);
      return table;
    }
}

export default ANIData;
