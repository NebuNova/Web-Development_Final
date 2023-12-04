document.addEventListener('DOMContentLoaded', function() {
    const volunteerButton = document.getElementById('volunteerNowFeedingAmerica');
    const volunteerForm = document.getElementById('volunteerFormFeedingAmerica');
    const infoDiv = document.getElementById('infoFeedingAmerica');
    const detailsPara = document.getElementById('detailsFeedingAmerica');

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
