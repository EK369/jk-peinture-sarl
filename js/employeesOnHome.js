// var team_designation_div = document.querySelectorAll('#team-designation-div');
var team_title_a = document.querySelectorAll('#team-title-a');
var team_p = document.querySelectorAll('#team-p');
// var date_div = document.querySelectorAll('#date-div');
var more_a = document.querySelectorAll('#more-a');
var team_a = document.querySelectorAll('#team-a');
var team_img = document.querySelectorAll('#team-img');
var creative_a = document.querySelectorAll('#creative-a');
var creative_img = document.querySelectorAll('#creative-images');
var creative_img_title = document.querySelectorAll('#creative_images-title');
var creative_img_meta_title = document.querySelectorAll('#creative-images-meta-title');
var progress_circle_h3 = document.querySelectorAll('#progress-circle-h3');
// var client_title_strong = document.querySelectorAll('#client-title > strong');
// var client_title_div = document.querySelectorAll('#client-title > div');
{/* <div class="team3col  owl-carousel"></div> */}
{/* <div class="item team-detail wow fadeInUp" data-wow-delay=".5s">
    <div class="team-item-img"> <img src="images/tm1.jpg" alt="" /> </div>
    <div class="team-designation text-yellow mt_20">Builder Operation Head</div>
    <h3 class="team-title text-bold mb_20"><a href="single_blog_image.html">1 Benedict Arnold</a></h3>
    <p>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
    <ul class="social mt_20 mb_50">
        <li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li>
        <li><a href="https://www.twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
        <li><a href="https://www.dribbble.com/" target="_blank"><i class="fa fa-dribbble"></i></a></li>
        <li><a href="https://www.pinterest.com/" target="_blank"><i class="fa fa-pinterest"></i></a></li>
        <li><a href="https://www.behance.net/" target="_blank"><i class="fa fa-behance"></i></a></li>
    </ul>
</div> */}

const blogsDataOnHome = [...blogsData]
console.log("lenght::::", blogsDataOnHome)

const getEmployeesData = () => {
    // try {
        let indentifierArr = ['first', 'second', 'third', 'fourth', 'fifth'];
        let indentifierArr2 = ['progress_1', 'progress_2', 'progress_3', 'progress_4'];
        // const start = Date.now();
        // await axios.get(`${mainURL}/blogs`).then(response => {
        //     const blogsDataOnHome = response?.data;
            const blogsDataLength = blogsDataOnHome.length;
            let creativeCount = 0;
            for (let i = blogsDataLength - 1; i >= blogsDataLength - PROJECTS_TO_BE_SHOWN_ON_HOME; i--) {
                const blog = blogsDataOnHome[i];
                // let progressObj = {
                //     progress_1: !!blog?.progress[0] ? blog?.progress[0] : 0,
                //     progress_2: !!blog?.progress[1] ? blog?.progress[1] : 0,
                //     progress_3: !!blog?.progress[2] ? blog?.progress[2] : 0,
                //     progress_4: !!blog?.progress[3] ? blog?.progress[3] : 0
                // }
                team_a[blogsDataLength - 1 - i].setAttribute("href", blog?.image[0]?.path || "");
                team_img[blogsDataLength - 1 - i].setAttribute("src", blog?.image[0]?.path || "");
                team_title_a[blogsDataLength - 1 - i].setAttribute("href", `single_blog_slider.html?id=${blog?._id}`);
                team_title_a[blogsDataLength - 1 - i].appendChild(document.createTextNode(blog?.title));
                team_p[blogsDataLength - 1 - i].setAttribute("style", "height: 72px;");
                team_p[blogsDataLength - 1 - i].appendChild(document.createTextNode(
                    blog?.description.length > 120 ?
                    blog?.description.substring(0, 120) + "..." :
                    blog?.description
                ));
                // date_div[blogsDataLength - 1 - i].appendChild(document.createTextNode(" " + customDateFormat(blog?.registeredDate)));
                more_a[blogsDataLength - 1 - i].setAttribute("href", `single_blog_slider.html?id=${blog?._id}`);
                let blogImages = blogsDataOnHome[i].image;
                if(creativeCount != CREATIVE_IMAGES_TO_BE_SHOWN)
                    for (let j = 0; j < blogImages.length; j++) {
                        creative_a[creativeCount].setAttribute("href", blog?.image[0]?.path || "");
                        creative_a[creativeCount].setAttribute("title", blog?.alt);
                        creative_img[creativeCount].setAttribute("src", blog?.image[0]?.path || "");
                        creative_img_title[creativeCount].appendChild(document.createTextNode(blogsDataOnHome[i].title));
                        creative_img_meta_title[creativeCount].appendChild(document.createTextNode(blogsDataOnHome[i].alt));
                        creativeCount++;
                        if(creativeCount == CREATIVE_IMAGES_TO_BE_SHOWN) {
                            break; 
                        }
                    }
                // progress_circle_h3[blogsDataLength - 1 - i].appendChild(document.createTextNode(blog?.title));
                // client_title_strong[blogsDataLength - 1 - i].appendChild(document.createTextNode(blog?.title));
                // client_title_div[blogsDataLength - 1 - i].appendChild(document.createTextNode(customDateFormat(blog?.registeredDate)));
                // circleProgress(indentifierArr[blogsDataLength - 1 - i], !!blog.progress ? blog.progress : 100);
                // circleProgress(indentifierArr[blogsDataLength - 1 - i], progressObj);

            }
            
    //     });
    //     // const end = Date.now();
    //     // console.log(`Execution time: ${end - start} ms`);
    //     // $(".loader").fadeOut("slow");
    //     // document.getElementById('gif-loder').remove();
    // } catch (err) {
    //     for (let i = 0; i < PROJECTS_TO_BE_SHOWN_ON_HOME; i++) {
    //         date_div[i].appendChild(document.createTextNode(" " + "dd mm yyyy"));
    //         if(i != PROJECTS_TO_BE_SHOWN_ON_HOME - 1)
    //             progress_circle_h3[i].appendChild(document.createTextNode(""));
    //     }
    //     console.log(err);
    //     // document.getElementById('gif-loder').remove();
    // } finally {
        document.getElementById('gif-loder').remove()
    // }
}
getEmployeesData();
let yearsOnMarket = document.querySelector('.projectFactsWrap > div');
let number1 = document.getElementById('number1');
yearsOnMarket.setAttribute("data-number", new Date().getFullYear() - 2017);
number1.innerHTML = new Date().getFullYear() - 2017;