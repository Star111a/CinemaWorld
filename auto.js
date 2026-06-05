// LOGIN
const loginForm = //ეს კოდი იღებს HTML ფორმას, რომლის ID არის loginForm
document.getElementById("loginForm");

if(loginForm){  //ამოწმებს, არსებობს თუ არა ფორმა გვერდზე.
 
  loginForm.addEventListener("submit", function(e){   //როდესაც მომხმარებელი დააჭერს ღილაკს Submit, ეს ფუნქცია გაეშვება

    e.preventDefault();   //აჩერებს ფორმის სტანდარტულ გაგზავნას, რათა გვერდი არ გადაიტვირთოს

    const email =   //იღებს მომხმარებლის მიერ შეყვანილ Email-სა და Password-ს
    document.getElementById("loginEmail").value;

    const password =
    document.getElementById("loginPassword").value;

      const users =   //localStorage-დან იღებს რეგისტრირებულ მომხმარებლებს
      JSON.parse(localStorage.getItem("cinemaUsers"))
      || [];

      const foundUser = users.find( //ეძებს მომხმარებელს
        user =>
        user.email === email &&
        user.password === password
    
    );

if(foundUser){  //თუ იპოვა user

  //ინახავს logged user-ს
  localStorage.setItem(
    "currentUser",
    JSON.stringify(foundUser)
  );

  //login სტატუსი
  localStorage.setItem(
    "isLoggedIn",
    "true"
  );

  alert("Login successful!");

  //გადადის მთავარ გვერდზე
  window.location.href = "index.html";

}else{

  alert("Invalid email or password");

}  
  });
}


// REGISTER
//HTML-დან იღებს რეგისტრაციის ფორმას (registerForm)
const registerForm =
document.getElementById("registerForm");

//ამოწმებს, არსებობს თუ არა რეგისტრაციის ფორმა
if(registerForm){

  //ფორმაზე ამატებს submit მოვლენას
  registerForm.addEventListener("submit", function(e){

    e.preventDefault();  //აჩერებს ფორმის სტანდარტულ გაგზავნას

    /*იღებს მომხმარებლის მიერ შეყვანილ სახელს,ემაილს,კოდს */
    const name =
    document.getElementById("registerName").value;

    const email =
    document.getElementById("registerEmail").value;

    const password =
    document.getElementById("registerPassword").value;
 
    const user ={   // ქმნის user ობიექტს
       name:name,
       email:email,
       password:password
};

 let users =   //იღებს ძველ მომხმარებლებს
 JSON.parse(localStorage.getItem("cinemaUsers"))
 || [];

 users.push(user);   //ამატებს ახალ user-ს

 localStorage.setItem(  //ინახავს localStorage-ში
  "cinemaUsers",
  JSON.stringify(users)
);

    //აჩვენებს შეტყობინებას: „რეგისტრაცია წარმატებით დასრულდა“
    alert("Registration successful!");

    //მომხმარებელი გადაჰყავს შესვლის გვერდზე (login.html)
    window.location.href = "login.html";

  });
}