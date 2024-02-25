function openExternalWebsite(name) 
{
    if(name==="klara")
    {
        window.location.href= 'https://www.nytimes.com/2021/02/23/books/review/klara-and-the-sun-kazuo-ishiguro.html';
       
    }

    elif(name==="women")
    {
        var url = "https://www.youtube.com/watch?v=lHSYKNeWtWk";

        window.location.href = url;
    }

    elif(name==="bean")
    {
        window.location.href= 'https://medium.com/@wishyouwereabook/book-review-sweet-bean-paste-by-durian-sukegawa-e26a406d3459';
    }

    elif(name==="light")
    {
        window.location.href('https://www.nytimes.com/2020/07/17/books/review/hamnet-maggie-ofarrell.html', '_blank');
    }
}