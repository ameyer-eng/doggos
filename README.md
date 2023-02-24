# doggos

This uses the dogs api to find pictures of dogs and display them.  It uses Handlebars for the view engine and node for the server.  I built it to gain experience with APIs.

## dog api
https://dog.ceo/dog-api/

## Why dogs api?

The dogs API is a great API to get started with. It's free to use, does not require keys or authentication, and sends pictures of dogs!

## How does it work?

It uses the fetch command to request all the available dog breeds on the dogs api.  It then generates a list and lets Handlebars generate the HTML to send as the response to display the list of breeds. 

If a breed is selected, it uses the fetch command to get all of the dog photos for that breed.  It then takes the first 20 pictures and uses Handlebars to embed them into <img> tags and generate the HTML. 
