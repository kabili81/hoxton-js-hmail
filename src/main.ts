import './style.css'

type emails = {
  from: string;
  header: string;
  content: string;
  emailAddress: string;
  img: string;
  read: boolean;
}

type state = {
  email: emails[]
}

const state = {
  emails: [
    {
      from: 'Nico',
      header: "Link to today's video and slides is up!",
      content:
        'Link is up and you know where to find it! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'nico@email.com',
      img: 'assets/nico.JPG',
      read: false
    },
    {
      from: 'Ed',
      header:
        "Congratulations! You have received a free beaver! Your name will now be displayed in the classroom's beaver list!",
      content:
        'Beaver beaver beaver beaver beaver beaver beaver beaver ! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'ed@email.com',
      img: 'assets/ed.JPG',
      read: false
    },
    {
      from: 'Government',
      header: 'Time to pay your tax!',
      content:
        'Pay us now! Pay us now! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.',
      emailAddress: 'government@email.com',
      img: 'assets/gov.jpg',
      read: false
    },
  
    // feel free to add more emails here
  ]
}

// <ul class="emails-list">
//   <li class="emails-list__item">
//     <span class="emails-list__item__read-icon material-symbols-outlined">
//       mark_email_unread
//     </span>
//     <img class="emails-list__item__image" src="assets/nico.JPG" />
//     <p class="emails-list__item__from">Nico</p>
//     <p class="emails-list__item__content">
//       Link to today's video and slides is up!
//     </p>
//   </li>
// </ul>



function renderEmails() {

  let emailUl = document.querySelector('.emails-list')
  emailUl.textContent = ''

  for ( let email of state.emails) {

    let ulEl = document.createElement('ul')
  ulEl.className = 'emails-list'
  
  let liEl = document.createElement('li')
  ulEl.append(liEl)

  let spanEl = document.createElement('span')
  
  let imgEl = document.createElement('img')
  imgEl.src 

  let pFromEl = document.createElement('p')
   

  let pContentEl = document.createElement('p')
  liEl.append(spanEl, imgEl, pFromEl, pContentEl,)
  }
  
}
function render() {
renderEmails()
}

render()