var map = L.map('map').setView([51.505, -0.09], 13);

        // Add a tile layer to the map (OpenStreetMap tile layer)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Add a marker to the map
        var marker = L.marker([51.505, -0.09]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
            document.addEventListener('DOMContentLoaded', () => {
                const doctors = [
                    {
                        name: 'Dr Asmitha ',
                        specialty: 'Cardiology',
                        location: 'Thiruvarur',
                        address:'Sannanallur',
                        image: 'https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2022/08/doctor-thumb-07.jpg',
                        rating: 4.67,
                        reviews: 3,
                        price: 1000,
                        "availability": {
            "days": ["Mon", "Tue", "Fri"],
            "availableSlots": [
                {
                    "shift": "Morning Shift",
                    "timeSlots": [

                        { "start": "09:00", "end": "11:00" },
                        { "start": "10:00", "end": "11:30" }
                    ]
                },
                {
                    "shift": "Afternoon Shift",
                    "timeSlots": [
                        { "start": "14:00", "end": "17:00" },
                        { "start": "15:00", "end": "16:30" }
                    ]
                }
            ]},
                        link: 'appointment.html',
                        clinic: 'Smile Dental Clinic',
                        Qualification:'MBBS, MD',
                        Experience: '7years',
                        about: [
                            'She graduated from Coimbatore Medical College under Madras University in 2017, excelling both academically and professionally.',
                            'Dr. Ashmitha\'s outstanding performance earned him the titles of Best Outgoing Resident in MBBS and Gold Medalist in Medicine for securing the highest marks from Coimbatore Medical College.',
                            'She went further with his education by pursuing an MD in 2020, highlighting his expertise in the field.',
                            'Dr. Ashmitha\'s commitment to medicine led him to serve as a Junior Resident at JIPMER, Pondicherry, before embarking on a remarkable 7-year tenure in the Tamil Nadu Medical Service.'
                        ],
                        phone:+916345567890,
                        email:'abc@gmail.com',
                        
                    },
                    {
                        name: 'Dr.James Amen',
                        specialty: 'Cardiology',
                        rating: 3.00,
                        reviews: 3,
                        price: 800,
                        location: 'Thiruvarur',
                        address:'Thiruvarur',
                        image: 'https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2022/08/doctor-thumb-09.jpg',
                        link: 'appointment.html',
                        clinic: 'Heart Care Center',
                        Availability: 'Mon, Tue, Fri',
                        Qualification:'MBBS, MD',
                        availableSlots:'Morning Shift',
                        Experience: '7years',
                        about: [
                            'He graduated from Coimbatore Medical College under Madras University in 2017, excelling both academically and professionally.',
                            'His outstanding performance earned him the titles of Best Outgoing Resident in MBBS and Gold Medalist in Medicine for securing the highest marks from Coimbatore Medical College.',
                            'he went further with his education by pursuing an MD in 2020, highlighting his expertise in the field.',
                            'His commitment to medicine led him to serve as a Junior Resident at JIPMER, Pondicherry, before embarking on a remarkable 7-year tenure in the Tamil Nadu Medical Service.'
                        ],
                        phone:+916345567890,
                        email:'abc@gmail.com',
                    },
                    {
                        name: 'Dr. Saravana',
                        specialty: 'Cardiology',
                        rating: 5.00,
                        reviews: 5,
                        price: 1800,
                        location: 'Thiruvarur',
                        address:'Nannilam',
                        image: 'https://i.pinimg.com/564x/6c/6e/d7/6c6ed7f4011b7f926b3f1505475aba16.jpg',
                        link: 'appointment.html',
                        clinic: 'Wellness Clinic',
                        "availability": {
                            "days": ["Mon", "Tue", "Fri"],
                            "availableSlots": [
                                {
                                    "shift": "Morning Shift",
                                    "timeSlots": [
                                        { "start": "08:00", "end": "09:00" },
                                        { "start": "09:30", "end": "10:30" },
                                        { "start": "11:00", "end": "12:00" }
                                    ]
                                },
                                {
                                    "shift": "Afternoon Shift",
                                    "timeSlots": [
                                        { "start": "14:00", "end": "15:00" },
                                        { "start": "15:30", "end": "16:30" }
                                    ]
                                }
                            ]
                        },
                        Qualification:'MBBS, MD',
                        Experience: '7years',
                        about: [
                            'He graduated from Coimbatore Medical College under Madras University in 2017, excelling both academically and professionally.',
                            'His outstanding performance earned him the titles of Best Outgoing Resident in MBBS and Gold Medalist in Medicine for securing the highest marks from Coimbatore Medical College.',
                            'She went further with his education by pursuing an MD in 2020, highlighting his expertise in the field.',
                            'His commitment to medicine led him to serve as a Junior Resident at JIPMER, Pondicherry, before embarking on a remarkable 7-year tenure in the Tamil Nadu Medical Service.'
                        ],
                        phone:+916345567890,
                        email:'abc@gmail.com',
                    },
                    {
                        name: 'Dr. Anitha Kumari',
                        specialty: 'Cardiology',
                        rating: 4.50,
                        reviews: 10,
                        price: 1200,
                        location: 'Thiruvarur',
                        address:'Thiruvarur',
                        image: 'https://i.pinimg.com/564x/9b/c0/ce/9bc0ceb83d86f8767d2f02151de1ee7c.jpg',
                        link: 'appointment.html',
                        clinic: 'Thiruvarur Heart Clinic',
                       "availability": {
                "days": ["Mon", "Wed", "Thu"],
                "availableSlots": [
                    {
                        "shift": "Morning Shift",
                        "timeSlots": [
                            { "start": "09:00", "end": "10:00" },
                            { "start": "10:30", "end": "11:30" }
                        ]
                    },
                    {
                        "shift": "Afternoon Shift",
                        "timeSlots": [
                            { "start": "13:00", "end": "14:00" },
                            { "start": "14:30", "end": "15:30" }
                        ]
                    }
                ]
            },
                        Qualification:'MBBS, MD',
                        Experience: '7years',
                        about: [
                            'She graduated from Coimbatore Medical College under Madras University in 2017, excelling both academically and professionally.',
                            'Her outstanding performance earned him the titles of Best Outgoing Resident in MBBS and Gold Medalist in Medicine for securing the highest marks from Coimbatore Medical College.',
                            'She went further with his education by pursuing an MD in 2020, highlighting his expertise in the field.',
                            'Her commitment to medicine led him to serve as a Junior Resident at JIPMER, Pondicherry, before embarking on a remarkable 7-year tenure in the Tamil Nadu Medical Service.'
                        ],
                        phone:+916345567890,
                        email:'abc@gmail.com',
                    },
                    {
                        name: 'Dr. Ravi Kumar',
                        specialty: 'Cardiology',
                        rating: 4.80,
                        reviews: 8,
                        price: 1500,
                        location: 'Thiruvarur',
                        address:'Thiruvarur',
                        image: 'https://i.pinimg.com/564x/16/96/71/169671343ef815d20808e6c9e43c5c19.jpg',
                        link: 'appointment.html',
                        clinic: 'Thiruvarur Medical Center',
                        Availability: 'Mon, Tue, Fri',
                        Qualification:'MBBS, MD',
                        Experience: '7years',
                        about: [
                            'He graduated from Coimbatore Medical College under Madras University in 2017, excelling both academically and professionally.',
                            'His outstanding performance earned him the titles of Best Outgoing Resident in MBBS and Gold Medalist in Medicine for securing the highest marks from Coimbatore Medical College.',
                            'He went further with his education by pursuing an MD in 2020, highlighting his expertise in the field.',
                            'His commitment to medicine led him to serve as a Junior Resident at JIPMER, Pondicherry, before embarking on a remarkable 7-year tenure in the Tamil Nadu Medical Service.'
                        ],
                        phone:+916345567890,
                        email:'abc@gmail.com',
                    },
                    {
                        name: 'Dr Renuga ',
                        specialty: 'Neurology',
                        rating: 4.67,
                        reviews: 3,
                        price: 1000,
                        location: 'Chennai',
                        address:'Adayar',
                        image: 'https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2022/08/doctor-thumb-07.jpg',
                        link: 'appointment.html',
                        clinic: 'Neuro Clinic',
                        "availability": {
                            "days": ["Tue", "Thu", "Fri"],
                            "availableSlots": [
                                {
                                    "shift": "Morning Shift",
                                    "timeSlots": [
                                        { "start": "08:30", "end": "09:30" },
                                        { "start": "10:00", "end": "11:00" }
                                    ]
                                },
                                {
                                    "shift": "Afternoon Shift",
                                    "timeSlots": [
                                        { "start": "15:00", "end": "16:00" },
                                        { "start": "16:30", "end": "17:30" }
                                    ]
                                }
                            ]
                        },
                    
                        Experience: '7years',
                        about: [
                            'She graduated from Coimbatore Medical College under Madras University in 2017, excelling both academically and professionally.',
                            'Her outstanding performance earned him the titles of Best Outgoing Resident in MBBS and Gold Medalist in Medicine for securing the highest marks from Coimbatore Medical College.',
                            'She went further with his education by pursuing an MD in 2020, highlighting his expertise in the field.',
                            'Her commitment to medicine led him to serve as a Junior Resident at JIPMER, Pondicherry, before embarking on a remarkable 7-year tenure in the Tamil Nadu Medical Service.'
                        ],
                        phone:+916345567890,
                        email:'abc@gmail.com',
                    },
                    {
                        name: 'Dr. SUndar',
                        specialty: 'Neurology',
                        rating: 3.00,
                        reviews: 3,
                        price: 800,
                        location: 'chennai',
                        address:'Perungalathur',
                        image: 'https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2022/08/doctor-thumb-09.jpg',
                        link: 'appointment.html',
                        clinic: 'Heart Care Center',
                        "availability": {
                            "days": ["Mon", "Wed", "Fri"],
                            "availableSlots": [
                                {
                                    "shift": "Morning Shift",
                                    "timeSlots": [
                                        { "start": "07:30", "end": "08:30" },
                                        { "start": "09:00", "end": "10:00" },
                                        { "start": "10:30", "end": "11:30" }
                                    ]
                                },
                                {
                                    "shift": "Afternoon Shift",
                                    "timeSlots": [
                                        { "start": "13:30", "end": "14:30" },
                                        { "start": "15:00", "end": "16:00" }
                                    ]
                                }
                            ]
                        },
                        Qualification:'MBBS, MD',
                        Experience: '7years',
                        about: [
                            'He graduated from Coimbatore Medical College under Madras University in 2017, excelling both academically and professionally.',
                            'His outstanding performance earned him the titles of Best Outgoing Resident in MBBS and Gold Medalist in Medicine for securing the highest marks from Coimbatore Medical College.',
                            'He went further with his education by pursuing an MD in 2020, highlighting his expertise in the field.',
                            'His commitment to medicine led him to serve as a Junior Resident at JIPMER, Pondicherry, before embarking on a remarkable 7-year tenure in the Tamil Nadu Medical Service.'
                        ],
                        phone:+916345567890,
                        email:'abc@gmail.com',
                    },
                    {
                        name: 'Dr. Saravana',
                        specialty: 'Neurology',
                        rating: 5.00,
                        reviews: 5,
                        price: 1800,
                        location: 'Chennai',
                        address:'Solinganallur',
                        image: 'https://i.pinimg.com/564x/6c/6e/d7/6c6ed7f4011b7f926b3f1505475aba16.jpg',
                        link: 'appointment.html',
                        clinic: 'Wellness Clinic',
                        "availability": {
                            "days": ["Mon", "Wed", "Fri"],
                            "availableSlots": [
                                {
                                    "shift": "Morning Shift",
                                    "timeSlots": [
                                        { "start": "07:30", "end": "08:30" },
                                        { "start": "09:00", "end": "10:00" },
                                        { "start": "10:30", "end": "11:30" }
                                    ]
                                },
                                {
                                    "shift": "Afternoon Shift",
                                    "timeSlots": [
                                        { "start": "13:30", "end": "14:30" },
                                        { "start": "15:00", "end": "16:00" }
                                    ]
                                }
                            ]
                        },
                        Qualification:'MBBS, MD',
                        Experience: '7years',
                        about: [
                            'He graduated from Coimbatore Medical College under Madras University in 2017, excelling both academically and professionally.',
                            'His outstanding performance earned him the titles of Best Outgoing Resident in MBBS and Gold Medalist in Medicine for securing the highest marks from Coimbatore Medical College.',
                            'He went further with his education by pursuing an MD in 2020, highlighting his expertise in the field.',
                            'His commitment to medicine led him to serve as a Junior Resident at JIPMER, Pondicherry, before embarking on a remarkable 7-year tenure in the Tamil Nadu Medical Service.'
                        ],
                        phone:+916345567890,
                        email:'abc@gmail.com',
                    },
                    {
                        name: 'Dr. Anitha Kumari',
                        specialty: 'Neurology',
                        rating: 4.50,
                        reviews: 10,
                        price: 1200,
                        location: 'Chennai',
                        address:'Amanchikarai',
                        image: 'https://i.pinimg.com/564x/9b/c0/ce/9bc0ceb83d86f8767d2f02151de1ee7c.jpg',
                        link: 'appointment.html',
                        clinic: 'Thiruvarur Heart Clinic',
                        "availability": {
                "days": ["Mon", "Wed", "Thu"],
                "availableSlots": [
                    {
                        "shift": "Morning Shift",
                        "timeSlots": [
                            { "start": "09:00", "end": "10:00" },
                            { "start": "10:30", "end": "11:30" }
                        ]
                    },
                    {
                        "shift": "Afternoon Shift",
                        "timeSlots": [
                            { "start": "13:00", "end": "14:00" },
                            { "start": "14:30", "end": "15:30" }
                        ]
                    }
                ]
            },
                        Qualification:'MBBS, MD',
                        Experience: '7years',
                        about: [
                            'She graduated from Coimbatore Medical College under Madras University in 2017, excelling both academically and professionally.',
                            'Her outstanding performance earned him the titles of Best Outgoing Resident in MBBS and Gold Medalist in Medicine for securing the highest marks from Coimbatore Medical College.',
                            'She went further with his education by pursuing an MD in 2020, highlighting his expertise in the field.',
                            'Her commitment to medicine led him to serve as a Junior Resident at JIPMER, Pondicherry, before embarking on a remarkable 7-year tenure in the Tamil Nadu Medical Service.'
                        ],
                        phone:+916345567890,
                        email:'abc@gmail.com',
                    },
                    {
                        name: 'Dr. Ravi Kumar',
                        specialty: 'neurology',
                        rating: 4.80,
                        reviews: 8,
                        price: 1500,
                        location: 'Chennai',
                        address:'Adayar',
                        image: 'https://i.pinimg.com/564x/16/96/71/169671343ef815d20808e6c9e43c5c19.jpg',
                        link: 'appointment.html',
                        clinic: 'Thiruvarur Medical Center',
                        "availability": {
                            "days": ["Tue", "Thu", "Fri"],
                            "availableSlots": [
                                {
                                    "shift": "Morning Shift",
                                    "timeSlots": [
                                        { "start": "08:30", "end": "09:30" },
                                        { "start": "10:00", "end": "11:00" }
                                    ]
                                },
                                {
                                    "shift": "Afternoon Shift",
                                    "timeSlots": [
                                        { "start": "15:00", "end": "16:00" },
                                        { "start": "16:30", "end": "17:30" }
                                    ]
                                }
                            ]
                        },
                        Qualification:'MBBS, MD',
                        Experience: '7years',
                        about: [
                            'He graduated from Coimbatore Medical College under Madras University in 2017, excelling both academically and professionally.',
                            'His outstanding performance earned him the titles of Best Outgoing Resident in MBBS and Gold Medalist in Medicine for securing the highest marks from Coimbatore Medical College.',
                            'He went further with his education by pursuing an MD in 2020, highlighting his expertise in the field.',
                            'His commitment to medicine led him to serve as a Junior Resident at JIPMER, Pondicherry, before embarking on a remarkable 7-year tenure in the Tamil Nadu Medical Service.'
                        ],
                        phone:+916345567890,
                        email:'abc@gmail.com',
                    }
                ]; const urlParams = new URLSearchParams(window.location.search);
                const index = urlParams.get('index');
            
                // Check if index is valid
                if (index !== null && !isNaN(index)) {
                    const doctor = doctors[index];
                    if (doctor) {
                        // Display doctor details
                        document.getElementById('doctor-img-container').innerHTML = `
             <div class="card">
        <div class="card-body">
            <div class="card-img-container">
                <img src="${doctor.image}" alt="${doctor.name}" class="card-img">
            </div>
            <h2 class="card-title">${doctor.name}</h2>
            <h3 class="card-subtitle">${doctor.specialty}</h3>
            <div class="card-rating">
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-filled"></i>
                <i class="fas fa-star star-empty"></i>
                <span class="rating-text">${doctor.rating}</span>
            </div>
        </div>
        <div class="card-footer">
           <div class="card-address"> <i class="fas fa-location"></i><p>${doctor.address}</p></div>
            <div class="card-phone"><i class="fa-solid fa-phone"></i><p>${doctor.phone}</p></div>
             <a href="#form-section">  <button class="btn-primary bookAppointmentBtn" data-index="${index}">Book Appointment</button></a>

        </div>
    </div>
           
        `;

        document.getElementById('doctor-specialist-container').innerHTML = `
            <table class="single_doctor_specialist_in_table">
                <tbody>
                    <tr><td>Qualifications</td><td>${doctor.Qualification}</td></tr>
                    <tr><td>Experience</td><td>${doctor.Experience}</td></tr>
                    <tr><td>Availability</td><td>${doctor.Availability}</td></tr>
                    
                    <tr><td>Price</td><td>${doctor.price}</td></tr>
                    
    
                </tbody>
            </table>
        `;

        document.getElementById('doctor-about-container').innerHTML = `
            <p></p>
            <ul>
                ${doctor.about.map(item => `<li><i class="fas fa-chevron-right arrow-icon"></i>${item}</li>`).join('')}
            </ul>
        `;
                    } else {
                        // Handle case where no doctor is found for the index
                        document.getElementById('doctor-section').innerHTML = '<p>Doctor not found.</p>';
                    }
                } else {
                    // Handle invalid index
                    document.getElementById('doctor-section').innerHTML = '<p>Invalid doctor index.</p>';
                }
            });

            $(document).ready(function() {
                $('#doctor_preferred_date').datepicker({
                    format: 'mm/dd/yyyy',
                    autoclose: true,
                    todayHighlight: true
                });
            });
    
            // Example to reload captcha
            document.querySelector('.reload-cap').addEventListener('click', function() {
                // Implement captcha reload functionality here
                alert('Captcha reloaded!');
            });
            document.addEventListener('DOMContentLoaded', function() {
                document.getElementById('doctor_submit').addEventListener('click', function(event) {
                    event.preventDefault(); // Prevent the default form submission
            
                    // Collect form data
                    const fullName = document.getElementById('doctor_full_name').value;
                    const phone = document.getElementById('doctor_phone').value;
                    const email = document.getElementById('doctor_email').value;
                    const preferredDate = document.getElementById('doctor_preferred_date').value;
                    const preferredTime = document.getElementById('doctor_preferred_time').value;
                    const message = document.getElementById('doctor_message').value;
                    const captcha = document.querySelector('input[name="captcha"]').value;
            
                    // Dummy data to simulate doctor availability (this should come from your backend)
                    const availableSlots = {
                        "2024-08-07": ["Morning Shift", "Evening Shift"],
                        // Add more dates and time slots as needed
                    };
            
                    // Check if the selected slot is available
                    if (availableSlots[preferredDate] && availableSlots[preferredDate].includes(preferredTime)) {
                        // Redirect to the submit card page
                        window.location.href = 'submitcard.html';
                    } else {
                        // Show an error message
                        alert('Sorry, the selected time slot is not available.');
                    }
                });
            });
            console.log('Preferred Date:', preferredDate);
console.log('Preferred Time:', preferredTime);
console.log('Available Slots:', availableSlots);
 
function renderContactLinks() {
    const msgCard = document.getElementById('msg-card');


    msgCard.innerHTML = '';


    const whatsappLink = document.createElement('a');
    whatsappLink.href = `https://wa.me/${doctor.phone}?text=Hello%20${doctor.name},%20I%20would%20like%20to%20book%20an%20appointment.`;
    whatsappLink.target = '_blank'; 
    whatsappLink.innerHTML = '<i class="fa-brands fa-whatsapp"></i>' 
    whatsappLink.style.marginRight = '10px'; 

    
    const emailLink = document.createElement('a');
    emailLink.href = `mailto:${doctor.email}`;
    emailLink.innerHTML = '<i class="fa-solid fa-envelope"></i>'; 
    msgCard.appendChild(whatsappLink);
    msgCard.appendChild(emailLink);
}

renderContactLinks(); 


document.getElementById('doctor_submit').addEventListener('click', function() {
    alert('Form submitted!');
});