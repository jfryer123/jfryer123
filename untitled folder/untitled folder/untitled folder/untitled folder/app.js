$(() => {


// const finished = [];
//




        // $(document).ready(function(){
        // $('#submit').trigger(':reset');
        // $(function(){
        // $('#shares').val('');
        // });
        // });
        // $('#form-id')[0].reset();


        // readingList.push(userInput)
        //
        // render();
    // const render = () => {
        //   $('.readingList').empty();
        //  readingList.forEach((item) => {
        //    $('ul').append('<li>' + item + '</li>');
        //  });
        // }
        // console.log('list: ', list);
        //   list.forEach((item) => {
        //     console.log(item);
        //   });
        // }

const list = [];
const $closeBtn = $('#close');

    const render = () => {
        // $('.readingList').empty();
        // list.forEach((item) => {
        // for (let i =0; i < list.length; i++) {
        var $items = $("<div class='listitems'>")
        // var $lastitem = $(array[array.length-1])
        $($items).append("<li>" + list[list.length-1] + "</li>")
        $('.readingList').append($items)
        $($items).append($("<button>").text("Finished!").addClass("finished"))
        // $($items).append($("<button>").text("Nevermind").addClass("nevermind"))


    }


        //   $('.readingList').append('<li>' + item + '</li>');
        //   $("li").append($("<button>").text("Finished!").addClass("finished"))
        // });
        // }
    // const done = () => {
    //     // $("button").empty();
    //     list.forEach((item)=> {




      //   })
      // }
      const closeModal = () => {
        $("#modal").css('display', 'none');
        // console.log('ijfdbv');
      }



    // const closeModal = () => {
    //   $("#modal".css('display', 'none');
    //   }


    // const switched = (event) => {
      // const $move = $(event.target).parent()
      // $(".newList").append($move)
      // $($move).addClass("done-item")
      // const $removeBtn = $($move).children("button")
      // $removeBtn.html("Remove")
    //   console.log("iaefjbva");
    // }


///////////////////////this works /////////////////////////
    $('form').on('submit', (event) => {
      const userInput = $('input[type="text"]').val();
      event.preventDefault();
      $(event.currentTarget).trigger('reset');
      list.push(userInput)

    $.ajax({
        url:'https://www.googleapis.com/books/v1/volumes?q=' + userInput,
        type: "GET",
        }).then(
            (data) => {
                // $("#cover").html(data.items[0].volumeInfo.imageLinks.thumbnail)
                $("#title").html(data.items[0].volumeInfo.title);
                $("#author").html(data.items[0].volumeInfo.authors)
                $("#description").html(data.items[0].volumeInfo.description)
            },
            (error) => {
                console.log(error);
            }
        );
    });

    $('.listed').on('click', (event) => {
          render();
          // done()
          // $(event.target).remove()
        })

    $('.readingList').on('click', (event)=>{
      $(event.target).parent().appendTo(".newList");
      $(event.target).remove();
      // css('text-decoration', 'line-through');
      // $(event.target).effect('shake');
      // $(event.target).appendTo($(".newList"))
      // switched()
      // const $move = $(".finished").parent()
      // $(".newList").append($move)
      // console.log("kajfbv");
    })



    $closeBtn.on('click', (event) => {
      closeModal();
    })







  });
