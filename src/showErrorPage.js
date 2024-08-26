export function showErrorPage() {

    const contentHtml = document.querySelector('.content');
    contentHtml.style.display = 'none';

    const errorPageHtml = document.querySelector('.not-found');
    errorPageHtml.style.display = 'flex';

    

}