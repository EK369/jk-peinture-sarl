



// const team_members = document.getElementById("team-members")

// const team_members_array = [
//     `
//         <div class="col-md-4 team-detail>
//         <div class="team-item-img"> <img src="images/tm1.jpg" alt="" /> </div>
//         <div class="team-designation mt_20">php Developer</div>
//         <h3 class="team-title  mt_10 mb_20"><a href="single_blog_image.html">1 joseph Lui </a></h3>
//         <p>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
//         <ul class="social mt_20 mb_80">
//             <li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li>
//             <li><a href="https://www.twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
//             <li><a href="https://www.dribbble.com/" target="_blank"><i class="fa fa-dribbble"></i></a></li>
//             <li><a href="https://www.pinterest.com/" target="_blank"><i class="fa fa-pinterest"></i></a></li>
//             <li><a href="https://www.behance.net/" target="_blank"><i class="fa fa-behance"></i></a></li>
//         </ul>
//         </div>
//     `,
//     `
//         <div class="col-md-4 team-detail">
//         <div class="team-item-img"> <img src="images/tm1.jpg" alt="" /> </div>
//         <div class="team-designation mt_20">php Developer</div>
//         <h3 class="team-title  mt_10 mb_20"><a href="single_blog_image.html">joseph Lui </a></h3>
//         <p>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
//             <ul class="social mt_20 mb_80">
//             <li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li>
//             <li><a href="https://www.twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
//             <li><a href="https://www.dribbble.com/" target="_blank"><i class="fa fa-dribbble"></i></a></li>
//             <li><a href="https://www.pinterest.com/" target="_blank"><i class="fa fa-pinterest"></i></a></li>
//             <li><a href="https://www.behance.net/" target="_blank"><i class="fa fa-behance"></i></a></li>
//             </ul>
//         </div>
//     `
// ]

// // for (let i = 0; i < team_members_array.length; i++) {
// //     if(i > 0) {
// //         const team_member = document.querySelectorAll("team_member")
// //         team_member.forEach
// //     }
// //     team_members.innerHTML = team_members_array[i];    
// // }

// // var tag = document.createElement("div");
// // tag.setAttribute("class", "col-md-4 team-detail")
// // var text = document.createTextNode("Tutorix is the best e-learning platform");
// // tag.appendChild(text);

// var element = document.getElementById("team-members");
// // element.appendChild(tag)
// const implement_tag = (tag, tag_class, content) => {
//     if(tag_class) {
//         tag.setAttribute("class", tag_class)
//     }
//     // tag.appendChild(document.createTextNode(content));
//     tag.innerHTML = content
// }

// text_array = [
//     ["col-md-4 team-detail", "This is a created tag"],
//     ["team-item-img", `<img src="images/tm1.jpg" alt="" />`],
//     ["team-designation mt_20", "php Developer"]
// ]

// var inside_element = document.createElement("div")
// implement_tag()

// for(let i = 0; i < 3; i++) {
//     var tag = document.createElement("div");
//     implement_tag(tag, text_array[i][0], text_array[i][1]);
//     element.appendChild(tag)
// }

