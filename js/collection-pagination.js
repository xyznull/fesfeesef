const{Core,Events}=Global;customElements.define("collection-pagination",class extends Core{render(){this.sub(Events.COLLECTION_UPDATED,this._handleCollectionUpdate),this.$({change:this._handleChange})}_handleCollectionUpdate({doc}){this.updateContentFrom(doc)}_handleChange(e){this.pub(Events.COLLECTION_CHANGE,{url:e.target.value,src:"pagination"})}});
//# sourceMappingURL=/cdn/shop/t/17/assets/collection-pagination.js.map?v=83309520565468110341718817531
