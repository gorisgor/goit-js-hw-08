const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector(".gallery");

function createGalleryEl(image) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = image.original;
  a.addEventListener("click", function(event) {
    event.preventDefault(); 
  });
  const img = document.createElement("img");
  img.src = image.preview;
  img.alt = image.description;
  img.setAttribute("data-source", image.original);
  img.classList.add("gallery-img");
  li.appendChild(a);
  a.appendChild(img);
  return li;
}

const galleryElems = images.map(createGalleryEl);

gallery.append(...galleryElems);
const links = gallery.querySelectorAll("a");
function handleClick(event) {
   console.log(event.target);
}

gallery.addEventListener("click", handleClick);



// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `)
// // const instance = basicLightbox.create(`
// // 	<h1>Not closable</h1>
// // 	<p>It's not possible to close this lightbox with a click.</p>
// // `, {
// // 	closable: false
// // })
// // const instance = basicLightbox.create(
// // 	document.querySelector('#template')
// // )
// const visible = basicLightbox.visible()

// instance.show(() => console.log('lightbox now visible'))

// instance.close(() => console.log('lightbox not visible anymore'))

// const elem = instance.element("img")

// {
// 	/*
// 	 * Prevents the lightbox from closing when clicking its background.
// 	 */
// 	closable: true,
// 	/*
// 	 * One or more space separated classes to be added to the basicLightbox element.
// 	 */
// 	className: '',
// 	/*
// 	 * Function that gets executed before the lightbox will be shown.
// 	 * Returning false will prevent the lightbox from showing.
// 	 */
// 	onShow: (instance) => {},
// 	/*
// 	 * Function that gets executed before the lightbox closes.
// 	 * Returning false will prevent the lightbox from closing.
// 	 */
// 	onClose: (instance) => {}
// }