const mainURL = "http://localhost:3000";
const PROJECTS_TO_BE_SHOWN = 6;
const PROJECTS_TO_BE_SHOWN_ON_HOME = 5;
const CREATIVE_IMAGES_TO_BE_SHOWN = 9;
const THIS_WEEK = 7;
const THIS_MONTH = 30;
const THIS_PAST_6_MONTH = 182;
const THIS_YEAR = 365;
const SUBJECT_MAX_LENGTH = 70;
const MESSAGE_MAX_LENGTH = 300;

let copyright = document.querySelector('.copyright-part');
if(!!copyright)
    copyright.innerHTML = `@ ${new Date().getFullYear()} All Rights Reserved JK PEINTURE SAINT`;

const isotopeFilter = (registeredDate) => dayjs().diff(registeredDate, 'day');

function countChars(countfrom, displayto, elemName) {
    const len = document.getElementById(countfrom).value.length;
    const displayTo = document.getElementById(displayto);
    if(elemName == 'inputLength')
        displayTo.innerHTML = `${len}/${SUBJECT_MAX_LENGTH}`;
    else
        displayTo.innerHTML = `${len}/${MESSAGE_MAX_LENGTH}`;
    if(len == 0)
        displayTo.style.borderColor = "var(--red-color)";
    else
        displayTo.style.borderColor = "var(--green-color)";
}

const validateBlogTitle = (title) => {
    return !!title && String(title)
        .match(
            /^[a-zA-Z0-9ßüÜöÖäÄ ]*$/
        )
}

const validateMessage = (message) => {
    return !!message && String(message)
        .match(
            /^[\.a-zA-Z0-9ßüÜöÖäÄ,!? ]*$/
        )
}

const validateSubject = (subject) => {
    return !!subject && String(subject)
        .match(
            /^[a-zA-ZßüÜöÖäÄ ]*$/
        )
}

const validateFullName = (fullName) => {
    return String(fullName)
        .match(
            /^[a-zA-ZßüÜöÖäÄ]+ [a-zA-ZßüÜöÖäÄ]+$/
        );
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validateGermanPhoneNumber = (phoneNumber) => {
    return String(phoneNumber)
        .match(
            // /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/
            /^([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/
            // \(void\)
        )
}

const customDateFormat = (dateString) => {
    let date = new Date(dateString);
    let dateArr = date.toDateString().split(" ");
    let newFormat = dateArr[2] + " " + dateArr[1] + " " + dateArr[3];
    return newFormat;
}

const showMore = (tagClassName, toBeShown, totalLength, imagesOnRowSize) => {  
    console.log("showMoreImagesOnRowSize:/ " + imagesOnRowSize);
    const blogItemClass = document.querySelectorAll(`.${tagClassName}`);
    click++;
    // console.log(click)
    let ctoBeShown = click * toBeShown;
    for (let i = ctoBeShown; i < (blogItemClass.length > ctoBeShown + toBeShown ? ctoBeShown + toBeShown : blogItemClass.length); i++) {
        // console.log(click)
        let blogItem = blogItemClass[i];
        console.log(blogItemClass.length)
        blogItem.style.display = "";
    }
    // click++; // 1     2    3
                // cits cits cits
    if(toBeShown == CREATIVE_IMAGES_TO_BE_SHOWN) {
        let totalImg = imagesOnRowSize;
        console.log(totalImg);
        let click_citbs = (click + 1) * CREATIVE_IMAGES_TO_BE_SHOWN
        let calculateHeight; // cits + cits + cits
        const creative_four_col_work_div = document.getElementById('creative-four-col-work');
        if (blogItemClass.length > click_citbs)
            if(click_citbs % imagesOnRowSize != 0) 
                calculateHeight =  parseInt(click_citbs / imagesOnRowSize) * 195 + 195;
            else
                calculateHeight =  parseInt((click_citbs - imagesOnRowSize) / imagesOnRowSize) * 195 + 195;
        else
            if (blogItemClass.length % imagesOnRowSize == 0)
                calculateHeight =  parseInt((blogItemClass.length - 1) / imagesOnRowSize) * 195 + 195;
            else
                calculateHeight =  parseInt((blogItemClass.length) / imagesOnRowSize) * 195 + 195;
        creative_four_col_work_div.setAttribute("style", `position: relative; height: ${calculateHeight}px;`)
        if(ctoBeShown + toBeShown >= totalLength) {
            document.getElementById('more-less-btn').style.display = "none";
            document.getElementById('portfolio-filter-ultop').style.display = "";
            document.getElementById('portfolio-filter-ulbottom').style.display = "";
        }
    }
    if(ctoBeShown + toBeShown >= totalLength)
        document.getElementById('more-less-btn').style.display = "none";
}
const checkMediaQueryImagesSize = () => {
    if(window.innerWidth > 1200) {
        return 4;
    } else if(window.innerWidth > 992) {
        return 3;
    } else if(window.innerWidth > 768) {
        return 2;
    } else {
        return 1;
    }
}

const _elementAppendChild = (parentElement, childElement) => {
    parentElement.appendChild(childElement);
}

const createElementItem = (_element, attributeObj, textNode) => {
    let item_element = document.createElement(_element);
    document.body.appendChild(item_element);
    if(!!attributeObj) {
        for (let i = 0; i < attributeObj?._attribute.length; i++) {
            item_element.setAttribute(attributeObj?._attribute[i], attributeObj?._attributeContent[i]);
        }
    }
    if(textNode) {
        item_element.appendChild(document.createTextNode(textNode));
    }
    
    return item_element;
}

const circleProgress = (className, progressObj) => {
    // console.log(progressObj)
    if (className[0] == '.') 
        className = className.replace(".", "");
    for (const progressKey in progressObj) {
        if (Object.hasOwnProperty.call(progressObj, progressKey)) {
            const singleProgress = progressObj[progressKey];
            $(`.${className}.circle.${progressKey}`).circleProgress({
                value: parseInt(singleProgress) / 100
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(parseInt(parseInt(singleProgress) * progress) + '<i>%</i>');
            })
        }
    }
    // $(`.${className}.circle`).circleProgress({
    //     value: (value / 100)
    // }).on('circle-animation-progress', function(event, progress) {
    //     $(this).find(' > strong').html(parseInt(value * progress) + '<i>%</i>');
    // })
}

const createListingEffectElement = (differenceInDates) => {
    let element_item;
    if (differenceInDates <= THIS_WEEK)
        element_item = createElementItem("div", {_attribute: ["class"], _attributeContent: ["grid-item listing-effect illustration VectorDesign Photography webdesign"]})
    else if (differenceInDates <= THIS_MONTH)
        element_item = createElementItem("div", {_attribute: ["class"], _attributeContent: ["grid-item listing-effect illustration VectorDesign Photography"]})
    else if (differenceInDates <= THIS_PAST_6_MONTH)
        element_item = createElementItem("div", {_attribute: ["class"], _attributeContent: ["grid-item listing-effect illustration VectorDesign"]})
    else if (differenceInDates <= THIS_YEAR)
        element_item = createElementItem("div", {_attribute: ["class"], _attributeContent: ["grid-item listing-effect illustration"]})
    else
        element_item = createElementItem("div", {_attribute: ["class"], _attributeContent: ["grid-item listing-effect"]})
    return element_item;
}