document.addEventListener('DOMContentLoaded', function() {
    const volunteerButton = document.getElementById('volunteerNowGood360');
    const volunteerForm = document.getElementById('volunteerFormGood360');
    const infoDiv = document.getElementById('infoGood360');
    const detailsPara = document.getElementById('detailsGood360');

    volunteerButton.addEventListener('click', function() {
        volunteerForm.style.display = 'block';
    });

    infoDiv.addEventListener('mouseover', function() {
        detailsPara.style.display = 'block';
    });

    infoDiv.addEventListener('mouseout', function() {
        detailsPara.style.display = 'none';
    });
});
