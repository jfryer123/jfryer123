$(() => {

    $('form').on('submit', (event) => {
        event.preventDefault();
        const userInput = $('input[type="text"]').val();

    $.ajax({
        url:'https://www.googleapis.com/books/v1/volumes?q=' + userInput,
        type: "GET",
        }).then(
            (data) => {
                $("#title").html(data.items[0].volumeInfo.title);
                $("#author").html(data.items[0].volumeInfo.authors)
                $("#description").html(data.items[0].volumeInfo.description)
            },
            (error) => {
                console.log(error);
            }
        );
    });



})
