$(document).ready(function() {
  $('.create_note').click(function(event){
    event.preventDefault()
    $('.notes').append('emily')
  })

  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
