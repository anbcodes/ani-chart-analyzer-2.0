<template>
  <v-app>
    <v-app-bar app hide-on-scroll>
      <v-toolbar-title>
        <span class="display-1">Google Docs ANI Chart Analyzer</span>
      </v-toolbar-title>
      <v-spacer />
      <span class="title">
        Chart Format Available
        <a
          href="https://docs.google.com/document/d/1I8RF0tlCcFS58eMYk43Tbvs224opg221N7jTPqoHl3g/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >Here</a>
      </span>
    </v-app-bar>
    <v-content>
      <v-container>
        <v-row justify="center">
          <div>
            <div id="ANI" ref="ANI" contenteditable="true"></div>
            <v-container>
              <v-row>
                <div id="summary" v-if="summary" v-html="summary"></div>
              </v-row>
            </v-container>
            <v-container>
              <v-row>
                <v-col cols="6">
                  <v-btn
                    block
                    @click="!aniOrdered ? reorder() : unorder()"
                    color="green"
                    :disabled="!aniPasted"
                  >{{aniOrdered ? "unorder" : "reorder"}}</v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn block @click="clear" color="red">clear</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import ANIData from './util/ANIData';

export default Vue.extend({
  name: 'App',
  data: () => ({
    aniOrdered: false,
    aniPasted: false,
    aniData: {} as ANIData,
    displayedTable: {} as HTMLTableElement,
    undisplayedTable: {} as HTMLTableElement,
    summary: '',
  }),
  mounted() {
    (this.$refs.ANI as HTMLElement).addEventListener('paste', (e) => {
      if (this.aniPasted) {
        return;
      }
      e.preventDefault();
      const pastedHTMLText = e.clipboardData?.getData('text/html');
      if (pastedHTMLText) {
        (this.$refs.ANI as HTMLElement).innerHTML = pastedHTMLText;
        this.handlePastedHtml(pastedHTMLText);
      }
    });
  },
  methods: {
    handlePastedHtml(htmlText: string) {
      const html = new DOMParser().parseFromString(htmlText, 'text/html');
      const tableWithinHTML = html.querySelector('table');
      if (tableWithinHTML) {
        this.displayedTable = tableWithinHTML;
        this.aniData = new ANIData(tableWithinHTML);
        this.createSummary();
        this.aniPasted = true;
      }
    },
    reorder() {
      this.undisplayedTable = this.displayedTable;
      this.displayedTable = this.aniData.reorderedTable();
      this.aniOrdered = true;
    },

    unorder() {
      const undisplayed = this.undisplayedTable;
      this.undisplayedTable = this.aniData.reorderedTable();
      this.displayedTable = undisplayed;
      this.aniOrdered = false;
    },

    createSummary() {
      const summary = [];
      summary.push('Affirmative Summary:<br>');
      summary.push('<ul>');
      summary.push(...this.aniData.AColumn.summary);
      summary.push('</ul><br>');
      summary.push('Negative Summary:<br>');
      summary.push('<ul>');
      summary.push(...this.aniData.NColumn.summary);
      summary.push('</ul>');
      this.summary = summary.join('');
    },

    clear() {
      this.displayedTable = {} as HTMLTableElement;
      this.undisplayedTable = {} as HTMLTableElement;
      const ANI = this.$refs.ANI as HTMLElement;
      ANI.innerHTML = '';
      this.aniPasted = false;
      this.aniOrdered = false;
      this.summary = '';
      this.aniData = {} as ANIData;
    },
  },

  watch: {
    displayedTable() {
      const currentTable = (this.$refs.ANI as HTMLElement).querySelector('table');
      if (currentTable) {
        const currentTableParent = currentTable.parentElement;
        if (currentTableParent) {
          currentTable.remove();
          currentTableParent.appendChild(this.displayedTable);
        }
      }
    },
  },
});
</script>
<style>
#ANI {
  display: inline-block;
  min-width: 8in;
  min-height: 11.5in;
  overflow-x: visible;
  overflow-y: scroll;
  box-shadow: rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  outline: none;
  background-color: white;
  padding: 0.5in;
}
#ANI:empty::before {
  content: "Paste your ANI Chart here";
}
#summary {
  display: inline-block;
  box-shadow: rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  outline: none;
  background-color: white;
  padding: 0.5in;
}
#ANI div {
  margin-left: 0 !important;
}
</style>
