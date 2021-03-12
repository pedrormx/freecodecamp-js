/**
 * Usernames are used everywhere on the internet. 
 * They are what give users a unique identity on their favorite sites.
 * You need to check all the usernames in a database.
 * Here are some simple rules that users have to follow when creating their username.

    1. Usernames can only use alpha-numeric characters.
    2. The only numbers in the username have to be at the end.
    2. There can be zero or more of them at the end. Username cannot start with the number.
    3. Username letters can be lowercase and uppercase.
    4. Usernames have to be at least two characters long.
    5. A two-character username can only use alphabet letters as characters.

 */

let username = "JackOfAllTrades";
let userCheck = /JACK|jo|Oceans11|RegexGuru|Z97|AB1/i; // Change this line
let result = userCheck.test(username);  