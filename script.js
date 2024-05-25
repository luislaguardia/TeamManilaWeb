document.getElementById("home").addEventListener("click", function() {
  showOnlyHomeItems();
});

document.getElementById("shop").addEventListener("click", function() {
  showAllItems();
});

function showOnlyHomeItems() {
  var items = document.querySelectorAll(".item");
  for (var i = 0; i < items.length; i++) {
    if (i < 2) {
      items[i].style.display = "block";
    } else {
      items[i].style.display = "none";
    }
  }
}

function showAllItems() {
  var items = document.querySelectorAll(".item");
  for (var i = 0; i < items.length; i++) {
    items[i].style.display = "block";
  }
}

function darkenBackground() {
    document.body.classList.toggle('darken');
}

function showTooltip(shirtId) {
  var tooltip = document.getElementById('tooltip-' + shirtId);
  tooltip.style.visibility = 'visible';
  tooltip.style.opacity = 1;
}

function hideTooltip(shirtId) {
  var tooltip = document.getElementById('tooltip-' + shirtId);
  tooltip.style.visibility = 'hidden';
  tooltip.style.opacity = 0;
}


