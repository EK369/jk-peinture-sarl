// let blogData = {};
let slider_post = document.querySelector('.slider-post');
// console.log(slider_post)
const params = window.location.search
const blogId = new URLSearchParams(params).get('id')

const postInfo_h3 = document.querySelector('#postInfo-h3');
const postInfo_p = document.querySelector('#postInfo-p');
const date_div = document.querySelector('#date-div');
const postInfo_div = document.querySelectorAll('.post-info-text');
const edit_text_btn = document.querySelectorAll('.post-info-text > i');
// console.log(edit_text_btn)
// let item_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["item"]});
// let thumbPost_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["thumb post-img"]});
// let postType_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["post-type"]});
// let fa_trowel_bricks_i = createElementItem("i", {_attribute: ["class", "aria-hidden"], _attributeContent: ["fa-solid fa-trowel-bricks", "true"]});
// let thumbPost_a = createElementItem("a");
// let thumbPost_img = createElementItem("img", {_attribute: ["style"], _attributeContent: ["height: 600px;"]});

    // <div class="item">
    //     <div class="thumb post-img">
    //     <div class="post-type"> 
            // <i class="fa-solid fa-trowel-bricks" aria-hidden="true"></i> 
        // </div>
    //     <a id="thumbPost-a-1">
            // <img id="thumbPost-img-1" style="height: 600px;">
        // </div></a>
    // </div>
function edit_title(elem) {

    console.log("You are editting this");
    console.log(elem.parentNode.id)
    let parentId = elem.parentNode.id;
    document.querySelector(`#${parentId} > h3`).remove();
    document.querySelector(`#${parentId} > i`).remove();
    let title_input = createElementItem("input", {_attribute: ["type", "style"], _attributeContent: ["text", "width: 100%;"]});
    let yes_icon = createElementItem("i", {_attribute: ["class", "id"], _attributeContent: ["fa-solid fa-check yes_btn", "yes_btn"]});
    let no_icon = createElementItem("i", {_attribute: ["class", "id"], _attributeContent: ["fa-solid fa-xmark no_btn", "no_btn"]});
    let yesNo_div = createElementItem("div", {_attribute: ["style"], _attributeContent: ["text-align: center;"]});
    title_input.value = blogData?.title;
    // <i class="fa-solid fa-check"></i>
    // <i class="fa-solid fa-xmark"></i>
    _elementAppendChild(yesNo_div, yes_icon);
    _elementAppendChild(yesNo_div, no_icon);
    _elementAppendChild(postInfo_div[0], title_input);
    _elementAppendChild(postInfo_div[0], yesNo_div);

    document.getElementById('yes_btn').addEventListener('click', () => {
        console.log("Saved successfully");
    })

    // <h3 class="text-bold text-uppercase mb_10"> <a id="postInfo-h3"></a> </h3>
    // <i class="far fa-edit"></i>
    document.getElementById('yes_btn').addEventListener('click', async () => {
        console.log(title_input.value);
        if(validateBlogTitle(title_input.value)) {
            let formData = new FormData();
            formData.append('title', title_input.value);
            console.log([...formData]);
            document.querySelector(`#${parentId} > input`).remove();
            document.querySelector(`#${parentId} > div`).remove();
            let temp_h3 = createElementItem("h3", {_attribute: ["class"], _attributeContent: ["text-bold text-uppercase mb_10"]});
            let temp_a = createElementItem("a", {_attribute: ["id"], _attributeContent: ["postInfo-h3"]}, title_input.value);
            let temp_i = createElementItem("i", {_attribute: ["class", "onclick"], _attributeContent: ["far fa-edit edit_btn", "edit_title()"]});
            _elementAppendChild(temp_h3, temp_a);
            _elementAppendChild(postInfo_div[0], temp_h3);
            _elementAppendChild(postInfo_div[0], temp_i);
            try {
                let res = await axios.put(`${mainURL}/blogs/${blogId}`, formData);
                if(res.status == 200) {
                    alert("Title updated successfully!");
                }
            } catch (error) {
                console.log(error)
                alert("Title not saved!");
            }
        } else {
            alert("Not added a decent title!");
        }
    })

    document.getElementById('no_btn').addEventListener('click', () => {
        console.log("Not Saved at all");
        document.querySelector(`#${parentId} > input`).remove();
        document.querySelector(`#${parentId} > div`).remove();
        let temp_h3 = createElementItem("h3", {_attribute: ["class"], _attributeContent: ["text-bold text-uppercase mb_10"]});
        let temp_a = createElementItem("a", {_attribute: ["id"], _attributeContent: ["postInfo-h3"]}, blogData?.title);
        let temp_i = createElementItem("i", {_attribute: ["class", "onclick"], _attributeContent: ["far fa-edit edit_btn", "edit_title()"]});
        _elementAppendChild(temp_h3, temp_a);
        _elementAppendChild(postInfo_div[0], temp_h3);
        _elementAppendChild(postInfo_div[0], temp_i);
    })
}

let blogData = blogsData.filter(blog => blog._id === blogId)[0]
singleBlogData = { ...blogData }


const getSingleBlogDatas = async () => {
    // try {
    //     await axios.get(`${mainURL}/blogs/${blogId}`).then(response => {
    //         let singleBlogData = response?.data;
            // blogData = Object.assign({}, singleBlogData);
            // console.log(singleBlogData?.image.length);
            for (let i = 0; i < singleBlogData?.image.length; i++) {
                const singleImage = singleBlogData?.image[i];
                // console.log(singleImage)
                let item_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["item"]});
                let thumbPost_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["thumb post-img"]});
                let postType_div = createElementItem("div", {_attribute: ["class"], _attributeContent: ["post-type"]});
                let fa_trowel_bricks_i = createElementItem("i", {_attribute: ["class", "aria-hidden"], _attributeContent: ["fa-solid fa-trowel-bricks", "true"]});
                let thumbPost_a = createElementItem("a", {_attribute: ["href"], _attributeContent: [singleImage?.path || ""]});
                let thumbPost_img = createElementItem("img", {
                    _attribute: ["src", "style"], 
                    _attributeContent: [singleImage?.path || "", "height: 600px; min-width: 100%;"]});
                _elementAppendChild(thumbPost_a, thumbPost_img);
                _elementAppendChild(postType_div, fa_trowel_bricks_i);
                _elementAppendChild(thumbPost_div, postType_div);
                _elementAppendChild(thumbPost_div, thumbPost_a);
                _elementAppendChild(item_div, thumbPost_div);
                _elementAppendChild(slider_post, item_div);
            }
            postInfo_h3.appendChild(document.createTextNode(singleBlogData?.title));
            postInfo_p.appendChild(document.createTextNode(singleBlogData?.description));
            date_div.appendChild(document.createTextNode(customDateFormat(singleBlogData?.registeredDate)));
        // })
        document.getElementById('gif-loder').remove();
    // } catch (error) {
    //     document.getElementById('gif-loder').remove();
    //     console.log(error)
    // }
}
// getSingleBlogDatas();