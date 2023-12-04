document.addEventListener('DOMContentLoaded', function() {
    const volunteerButton = document.getElementById('volunteerNowDirectRelief');
    const volunteerForm = document.getElementById('volunteerFormDirectRelief');
    const infoDiv = document.getElementById('infoDirectRelief');
    const detailsPara = document.getElementById('detailsDirectRelief');

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
