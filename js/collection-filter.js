const{Core,Events}=Global,EVENT_SRC="filter";customElements.define("collection-filter-list",class extends Core{propTypes={"form-id":String};render(){this.$({change:this._changeHandler}),this.sub(Events.COLLECTION_UPDATED,this._handleCollectionUpdate)}_changeHandler(e){this.pub(Events.COLLECTION_CHANGE,{src:EVENT_SRC,formId:this.prop("form-id")})}_handleCollectionUpdate({doc,src}){src===EVENT_SRC&&this.updateContentFrom(doc)}});
//# sourceMappingURL=/cdn/shop/t/17/assets/collection-filter.js.map?v=17982871295969265391718817531
