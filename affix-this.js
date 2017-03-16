// custom affix
// target passed into init
//.affix-this {
//  position: fixed;
//  margin-top: 0;
//  top: 80px; /* this is the offset */
//}
var AFFIXTHIS = {
  $target: '',

  affixPoint: 0,

  offset: 0,

  init: function( target, offset ) {
    this.$target = $( target );
    if ( this.$target.length ) {
      this.offset = offset;
      this.affixPoint = this.$target.eq(0).offset().top - this.offset;
      this.addHandlers();
    }
  },

  addHandlers: function() {
    $( window ).on( 'scroll', ( e ) => { this.scrollCallback( e ) });
    $( window ).on( 'resize', ( e ) => { this.resizeCallback( e ) });
  },

  scrollCallback: function( e ) {
    if ( $( window ).scrollTop() > this.affixPoint ) {
      this.makeFixed();
    } else {
      this.makeStatic();
    }
  },

  resizeCallback: function( e ) {
    this.$target.makeStatic();
    this.affixPoint = this.$target.eq(0).offset().top - this.offset;
    this.$target.scrollCallback( e );
  },

  makeFixed: function() {
    this.$target.addClass( 'affix-this' );
  },

  makeStatic: function() {
    this.$target.removeClass( 'affix-this' );
  }
};

AFFIXTHIS.init( '.target', 100 );
