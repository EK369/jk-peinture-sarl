const imageRoute = "images/blog/";
const thumbPost_a = document.querySelectorAll('#thumb-post-a');
const thumbPost_img = document.querySelectorAll('#thumb-post-img');
const postInfo_a = document.querySelectorAll('#post-info-a');
const postInfo_p = document.querySelectorAll('#post-info-p');
const date_div = document.querySelectorAll('#date-div');
const more_a = document.querySelectorAll('#more-a');

const BLOG_TO_BE_SHOWN = 6;

/*
    <div class="blog-item item text-left"> <!-- col-md-6 mb_50 -->
        <div class="box-holder">
            <div class="post-format">
            <div class="thumb post-img"> <a id="thumb-post-a" href="images/blog/blog_img_01.jpg" title="Beautiful Lady" data-source="images/blog/blog_img_01.jpg"> <img src="images/blog/blog_img_01.jpg"  alt="Len.or"></a> </div>
            <div class="post-type"><i class="fa fa-music" aria-hidden="true"></i></div>
            </div>
            <div class="post-info mt_20 "> <!--mtb_20 -->
            <h3 class="text-bold text-uppercase mb_10"> <a id="post-info-a" href="#">There are many variations of passages lable</a> </h3>
            <p id="post-info-p">Aliquam egestas pellentesque est. Etiam a orci Nulla id enim feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.</p>
            <div class="details mt_20"> <!--mtb_20 -->
                <div class="date pull-left" id="date-div"> <i class="fa fa-calendar" aria-hidden="true"></i>11 May 2017 </div>
                <div class="more pull-right"> <a id="more-a" href="single-blog.html">Read more <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a></div>
            </div>
            </div>
        </div>
    </div> 
*/

function _elementAppendChild(parentElement, childElement) {
    parentElement.appendChild(childElement);
}

const getBlogData = async () => {
    try {
        await axios.get( `${mainURL}/blogs`).then( response => {
            const blogsData = response?.data;
            const blogsDataLength = blogsData.length;
            const startIterator = blogsDataLength - 7;
            // console.log(blogsData.length);
            for (let i = blogsDataLength - 1; i >= startIterator; i--) { // blogsDataLength;
                const blog = blogsData[i];
                // console.log(blog)
                thumbPost_a[blogsDataLength - i - 1].setAttribute("href", imageRoute + blog?.image[0].name);
                thumbPost_a[blogsDataLength - i - 1].setAttribute("title", blog?.image[0].alt)
                thumbPost_a[blogsDataLength - i - 1].setAttribute("data-source", imageRoute + blog?.image[0].name);
                thumbPost_img[blogsDataLength - i - 1].setAttribute("src", imageRoute + blog?.image[0].name);
                thumbPost_img[blogsDataLength - i - 1].setAttribute("alt", "Len.or");

                postInfo_a[blogsDataLength - i - 1].setAttribute("href", `single_blog_slider.html?id=${blog?._id}`);
                postInfo_a[blogsDataLength - i - 1].appendChild(document.createTextNode(blog?.title));
                postInfo_p[blogsDataLength - i - 1].appendChild(document.createTextNode(
                    blog?.description.length > 100 ?
                    blog?.description.substring(0, 100) + "..." :
                    blog?.description.substring(0, 100)
                ));

                date_div[blogsDataLength - i - 1].appendChild(document.createTextNode(customDateFormat(blog?.registeredDate)));
                more_a[blogsDataLength - i - 1].setAttribute("href", `single_blog_slider.html?id=${blog?._id}`);

            }
        })
    } catch (err) {
        console.log(err);
    }
}
getBlogData();

var elements = document.querySelectorAll(".owl-carousel");
// elements[0].children.forEach(child => {
//     console.log(child);
// });

// var interval;
// try{
//     interval = setInterval(()=>{
//         if(document.querySelector('.blog-item')){
//             clearInterval(interval);
//             var owlNav = document.querySelector('.blog-item .owl-nav');
//             owlNav.classList.remove("disabled");
//             console.log(owlNav)
//         }
//     },100)
// }catch(e){
//     clearInterval(interval)
// }

/*
    console.log(blog);
    let blogItem_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["blog-item item text-left"]});
    let boxHolder_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["box-holder"]});
    let postFormat_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["post-format"]});
    let thumb_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["thumb post-img"]});
    let thumbPost_a = createElementItem("a", {_attribute: ["href", "title", "data-source"], _attributeContent: ["images/blog/blog_img_01.jpg", "Beautiful Lady", "images/blog/blog_img_01.jpg"]});
    let thumbPost_img = createElementItem("img", {_attribute: ["src", "alt"], _attributeContent: ["images/blog/blog_img_01.jpg", "Beautiful Lady"]});
    let postType_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["post-type"]});
    let postType_i = createElementItem("i", {_attribute: ["class", "area-hidden"], _attributeContent: ["fa fa-music", "true"]});

    _elementAppendChild(postType_div, postType_i);
    _elementAppendChild(thumbPost_a, thumbPost_img);
    _elementAppendChild(thumb_div, thumbPost_a);
    _elementAppendChild(postFormat_div, thumb_div);
    _elementAppendChild(postFormat_div, postType_div);

    let postInfo_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["post-info mt_20"]});
    let postInfo_h3 = createElementItem("h3", {_attribute: ["class"], _attributeContent: ["text-bold text-uppercase mb_10"]});
    let postInfo_a = createElementItem("a", null, "The title");
    let postInfo_p = createElementItem("p", null, "This is a pragraph for this title");
    let details_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["details mt_20"]});
    let date_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["date pull-left"]});
    let date_i = createElementItem("i", {_attribute: ["class", "aria-hidden"], _attributeContent: ["fa fa-calendar", "true"]}, "11 May 2017");
    let more_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["more pull-right"]});
    let more_a = createElementItem("a", {_attribute: ["href"], _attributeContent: ["single-blog.html"]}, "Read more");
    let more_i = createElementItem("i", {_attribute: ["class", "aria-hidden"], _attributeContent: ["fa fa-arrow-circle-right", "true"]});

    _elementAppendChild(more_a, more_i);
    _elementAppendChild(more_div, more_a);
    _elementAppendChild(date_div, date_i);
    _elementAppendChild(details_div, date_div);
    _elementAppendChild(details_div, more_div);
    _elementAppendChild(postInfo_h3, postInfo_a);

    _elementAppendChild(postInfo_div, postInfo_h3);
    _elementAppendChild(postInfo_div, postInfo_p);
    _elementAppendChild(postInfo_div, details_div);

    _elementAppendChild(boxHolder_div, postFormat_div);
    _elementAppendChild(boxHolder_div, postInfo_div);
    _elementAppendChild(blogItem_div, boxHolder_div);

    _elementAppendChild(blogsOnHome, blogItem_div);
*/