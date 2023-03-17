/*
    ==================
    Title: theme.js, 
    Author: William Austin
    Date: 3/17/2023
    Description: Theme Choosing JS Code
*/

/**
 * Set the default theme to light if one has not been set
 */
function setDefaultTheme()
{
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}
/**
 * Set the HTML body to the user's selected theme
 */
function setSelectedTheme()
{
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}