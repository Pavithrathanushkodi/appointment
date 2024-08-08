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
            Availability: 'Mon, Tue, Fri',
            link: 'appointment.html',
            clinic: 'Smile Dental Clinic',
            Qualification:'MBBS, MD',
            Experience: '7years',
            phone:+916789654321,
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
            Experience: '7years',
            phone:+916789654321,
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
            Availability: 'Mon, Tue, Fri',
            Qualification:'MBBS, MD',
            Experience: '7years',
            phone:+916789654321,
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
            Availability: 'Mon, Tue, Fri',
            Qualification:'MBBS, MD',
            Experience: '7years',
            phone:+916789654321,
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
            phone:+916789654321,
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
            Availability: 'Mon, Tue, Fri',
            Qualification:'MBBS, MD',
            Experience: '7years',
            phone:+916789654321,
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
            Availability: 'Mon, Tue, Fri',
            Qualification:'MBBS, MD',
            Experience: '7years',
            phone:+916789654321,
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
            Availability: 'Mon, Tue, Fri',
            Qualification:'MBBS, MD',
            Experience: '7years',
            phone:+916789654321,
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
            Availability: 'Mon, Tue, Fri',
            Qualification:'MBBS, MD',
            Experience: '7years',
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
            Availability: 'Mon, Tue, Fri',
            Qualification:'MBBS, MD',
            Experience: '7years',
            phone:+916789654321,
        }
    ];


    document.addEventListener('DOMContentLoaded', function() {
        const locationInput = document.getElementById('doctor_location_input');
        const locationOptionsContainer = document.getElementById('custom_select_options_location');
        const specialtyInput = document.getElementById('doctor_specialty_input');
        const specialtyOptionsContainer = document.getElementById('custom_select_options_specialty');

        // Replace with your API URLs
        const locationApiUrl = 'https://run.mocky.io/v3/a10747b3-7bb4-4177-8a4c-396b31e13d99';
        const specialtyApiUrl = 'https://run.mocky.io/v3/6924dc3e-c4d6-45a8-9969-132e5a71c7a7'; // Replace with your Mocky.io URL for specialties

        // Fetch locations from the API
        fetch(locationApiUrl)
            .then(response => response.json())
            .then(data => {
                data.forEach(district => {
                    const option = document.createElement('div');
                    option.classList.add('option');
                    option.textContent = district;
                    option.addEventListener('click', () => {
                        locationInput.value = district;
                        locationOptionsContainer.style.display = 'none';
                    });
                    locationOptionsContainer.appendChild(option);
                });
            })
            .catch(error => {
                console.error('Error fetching the districts:', error);
            });

        locationInput.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevents the click event from closing the dropdown
            locationOptionsContainer.style.display = locationOptionsContainer.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', (event) => {
            if (!event.target.closest('.custom-select-container')) {
                locationOptionsContainer.style.display = 'none';
            }
        });

        // Fetch specialties from the API
        fetch(specialtyApiUrl)
            .then(response => response.json())
            .then(data => {
                data.forEach(specialty => {
                    const option = document.createElement('div');
                    option.classList.add('option');
                    option.textContent = specialty;
                    option.addEventListener('click', () => {
                        specialtyInput.value = specialty;
                        specialtyOptionsContainer.style.display = 'none';
                    });
                    specialtyOptionsContainer.appendChild(option);
                });
            })
            .catch(error => {
                console.error('Error fetching specialties:', error);
            });

        specialtyInput.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevents the click event from closing the dropdown
            specialtyOptionsContainer.style.display = specialtyOptionsContainer.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', (event) => {
            if (!event.target.closest('.custom-select-container')) {
                specialtyOptionsContainer.style.display = 'none';
            }
        });

        // Handle form submission and filtering of doctors
        document.getElementById('searchForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form from submitting normally

            const location = locationInput.value.trim().toLowerCase();
            const specialty = specialtyInput.value.trim().toLowerCase();
            const keyword = document.getElementById('keyword').value.trim().toLowerCase();

            const filteredDoctors = doctors.filter(doctor => {
                const matchesLocation = location === '' || doctor.location.toLowerCase() === location;
                const matchesSpecialty = specialty === '' || doctor.specialty.toLowerCase() === specialty;
                const matchesKeyword = keyword === '' || doctor.name.toLowerCase().includes(keyword) || doctor.address.toLowerCase().includes(keyword);

                return matchesLocation && matchesSpecialty && matchesKeyword;
            });

            displayDoctors(filteredDoctors);
        });

        function displayDoctors(doctors) {
            const doctorSection = document.getElementById('doctor-section');
            const doctorCards = document.getElementById('doctorCards');
            const doctorHeader = document.getElementById('doctor-header');
            doctorHeader.innerHTML = `
                <div class="col-md-6">
                    <div class="section-header">
                        <h2 class="section-title">Recommended Doctors</h2>
                    </div>
                </div>
                <div class="col-md-6 text-end scroll-icon">
                    <button id="scroll-left" class="nav-control prev"><i class="fas fa-chevron-left"></i></button>
                    <button id="scroll-right" class="nav-control next"><i class="fas fa-chevron-right"></i></button>
                </div>
            `;

            doctorCards.innerHTML = '';

            if (doctors.length === 0) {
                doctorCards.innerHTML = '<p>No doctors found matching the criteria.</p>';
            } else {
                doctors.forEach((doctor, index) => {
                    const card = `
                        <div class="card">
                            <div class="card-img">
                                <img src="${doctor.image}" alt="${doctor.name}">
                            </div>
                            <div class="card-content">
                                <h3>${doctor.name}</h3>
                                <p class="specialty">${doctor.specialty}</p>
                                <p class="location"><i class="feather-map-pin"></i> ${doctor.address}</p>
                            </div>
                            <div class="card-button">
                                <a href="appointment.html?index=${index}"><button class="btn-primary">Know More</button></a>
                            </div>
                        </div>
                    `;
                    doctorCards.innerHTML += card;
                });
            }

            doctorSection.style.display = 'block';
        }
    });