Feature: Add Book To Basket
  User should be able to add a book to the basket and verify the correct book is added

Scenario:
  Given I navigate to the following "takealot"
  And the user search for department "books"
  And the user click on "search icon"
  And the user see books listed
  When the user take note of the "first" listed book
  And the user click on "Add to Cart"
  Then the user must see 1 item added to the cart
  And the user click on "cart icon"
  Then the user must be redirected to "Shopping Card" page
  And the user must see the "first" listed book added to cart
