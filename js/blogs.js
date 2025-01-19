const imageRoute = "images/blog/";
const blogs = document.getElementById('display_blogs');
const blogsOnHome = document.getElementById('display_blogs_onHome');
const showMoreButton = document.getElementById('more-less-btn');

var totalBlogsDataLength;
  

const getBlogData = async () => {
    let blogsDataLength = 0;
    // try {
    //     await axios.get(`${mainURL}/blogs`).then((response) => {
    //         const blogsData = response?.data;
        
            blogsDataLength = blogsData.length;
            for (let i = blogsDataLength - 1; i >= 0; i--) {
                const blog = blogsData[i];
                // console.log(blog)
                console.log(`../civil-engineer-server/uploads/${blog?.title.replace(" ", "-") + "-" + 1 + "." + blog?.image[0]?.contentType.split("/")[1] }`)
                // blogs - blogItem - boxHolder - postFormat, postInfo ...
                let blogItem_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["blog-item col-md-6 mb_50"]});
                let boxHolder_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["box-holder"]});
                let postFormat_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["post-format"]});
                let postInfo_div = createElementItem("div", {_attribute: ["class", "style"], _attributeContent: ["post-info mtb_20", "width: 100%"]});
                let thumb_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["thumb post-img"]});
                let postType_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["post-type"]});
                let postType_i = createElementItem("i", {_attribute: ["class", "aria-hidden"], _attributeContent: ["fa-solid fa-trowel-bricks", "true"]});
                let postImg_a = createElementItem("a", {_attribute: ["href", "title", "data-fancybox"], _attributeContent: [`../civil-engineer-server/uploads/${blog?.title.replace(" ", "-") + "-" + 1 + "." + blog?.image[0]?.contentType.split("/")[1]}` || "", blog?.alt || "", ""]});
                // let postImg_img = createElementItem("img", {_attribute: ["src"], _attributeContent: ["data:image/" + blog?.image[0]?.contentType+";base64," + blog?.image[0]?.data.toString('base64') || ""]});
                let postImg_img = createElementItem("img", {_attribute: ["src"], _attributeContent: [blog?.image[0]?.path || ""]});
                let titleText_h3 = createElementItem("h3", {_attribute: ["class"], _attributeContent: ["text-bold text-uppercase mb_10"]});
                let titleText_a = createElementItem("a", {_attribute: ["href"], _attributeContent: [`single_blog_slider.html?id=${blog?._id}`]}, blog?.title);
                let descriptionText_p = createElementItem("p", null, 
                    blog?.description.length > 200 ?
                    blog?.description.substring(0, 200) + "..." :
                    blog?.description.substring(0, 200));
                let details_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["details mtb_20"]});
                let date_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["date pull-left"]});
                let more_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["more pull-right"]});
                let date_i = createElementItem("i", {_attribute: ["class", "aria-hidden"], _attributeContent: ["fa fa-calendar", "true"]});
                let more_a = createElementItem("a", {
                    _attribute: ["href", "style"],
                    _attributeContent: [
                        `single_blog_slider.html?id=${blog?._id}`, 
                        "color: black; font-size: 10px !important;"
                    ]
                }, "LIRE LA SUITE ");
                let more_i = createElementItem("i", {_attribute: ["class", "aria-hidden"], _attributeContent: ["fa fa-arrow-circle-right", "true"]});
                
                _elementAppendChild(more_a, more_i);
                _elementAppendChild(more_div, more_a);
                _elementAppendChild(date_div, date_i);
                date_div.appendChild(document.createTextNode(customDateFormat(blog?.registeredDate)));
                _elementAppendChild(details_div, date_div);
                _elementAppendChild(details_div, more_div);

                _elementAppendChild(titleText_h3, titleText_a);
                _elementAppendChild(postInfo_div, titleText_h3);
                _elementAppendChild(postInfo_div, descriptionText_p);
                _elementAppendChild(postInfo_div, details_div);

                _elementAppendChild(postType_div, postType_i);
                _elementAppendChild(postImg_a, postImg_img);
                _elementAppendChild(thumb_div, postImg_a);
                _elementAppendChild(postFormat_div, thumb_div);
                _elementAppendChild(postFormat_div, postType_div);

                _elementAppendChild(boxHolder_div, postFormat_div);
                _elementAppendChild(boxHolder_div, postInfo_div);
                _elementAppendChild(blogItem_div, boxHolder_div);

                // appending to blog
                blogs.appendChild(blogItem_div);
                if(i < blogsDataLength - PROJECTS_TO_BE_SHOWN) {
                    blogItem_div.style.display = "none";
                }
            }
        // });
        document.getElementById('gif-loder').remove();
    // } catch (err) {
    //     document.getElementById('gif-loder').remove();
    // }
    return blogsDataLength;
}

let click = 0;
let showMoreBtn;
async function getBlogsDataLength() {
    let blogsDataLength = await getBlogData();
    if(blogsDataLength == 0) {
        blogs.appendChild(document.createTextNode("No projects to show!"))
        showMoreButton.style.display = "none";
    }
    else {
        showMoreBtn = () => showMore('blog-item', PROJECTS_TO_BE_SHOWN, blogsDataLength);
        showMoreButton.setAttribute("onclick", "showMoreBtn()");
    }
}

getBlogsDataLength()