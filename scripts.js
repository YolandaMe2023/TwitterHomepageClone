document.addEventListener("DOMContentLoaded", function() {
    
    const tweets = [
        { user: 'Emily @emilydoe', text: "Catch flights, not feelings.", profileImage: 'assets/freestocks-9UVmlIb0wJU-unsplash.jpg', mainImage: 'assets/natali-quijano-N79MYsd2Ce4-unsplash (1).jpg', likes: 0, retweets: 0 },
        { user: 'Siya @siyadoe', text: "Define tough.", profileImage: 'assets/edgar-pimenta-QCjG5hGpdA0-unsplash.jpg', mainImage: 'assets/philippa-rose-tite-x941Ano8X0c-unsplash.jpg', likes: 0, retweets: 0 },
        { user: 'DogWorld @woofwoof', text: "Living my best life, one treat at a time.", profileImage: 'assets/richard-brutyo-Sg3XwuEpybU-unsplash.jpg', mainImage: 'assets/ralu-gal-G8cB8hY3yvU-unsplash (1).jpg', likes: 0, retweets: 0 },
        { user: 'VintageCars @cars', text: "Classic beauty never fades.", profileImage: 'assets/erik-odiin-DH_IAgZkJP4-unsplash.jpg', mainImage: 'assets/stephan-valentin-6NT7jy6OU9I-unsplash (1).jpg', likes: 0, retweets: 0 }
    ];

    // Function to add tweets 
    function addTweet(tweet) {
        const timeline = document.getElementById('timeline');
        const tweetElement = document.createElement('div');
        tweetElement.className = 'tweet';
        tweetElement.innerHTML = `
            <div class="tweet-header">
                <img src="${tweet.profileImage}" alt="Profile Image" class="profile-image">
                <p><strong>${tweet.user}</strong></p>
            </div>
            <p>${tweet.text}</p>
            <img src="${tweet.mainImage}" class="main-image">
            <div class="tweet-actions">
                <button class="retweet-btn"><i class="fas fa-retweet"></i> Retweet</button>
                <button class="like-btn"><i class="fas fa-heart"></i> <span class="like-count">${tweet.likes || ''}</span></button>
                <button class="bookmark-btn"><i class="fas fa-bookmark"></i> Bookmark</button>
            </div>
        `;
        timeline.appendChild(tweetElement);

        const retweetBtn = tweetElement.querySelector('.retweet-btn');
        const likeBtn = tweetElement.querySelector('.like-btn');
        const bookmarkBtn = tweetElement.querySelector('.bookmark-btn');
        const likeCount = tweetElement.querySelector('.like-count');

        retweetBtn.addEventListener('click', () => {
            addTweet(tweet);
        });

        likeBtn.addEventListener('click', () => {
            tweet.likes++;
            likeCount.textContent = tweet.likes || '';
        });

        bookmarkBtn.addEventListener('click', () => {
            const popup = document.createElement('div');
            popup.className = 'bookmark-popup';
            popup.textContent = 'Added to bookmarks';
            document.body.appendChild(popup);
            setTimeout(() => {
                popup.remove();
            }, 2000);
        });
    }

    tweets.forEach(tweet => {
        addTweet(tweet);
    });

    // new tweets go here
    document.getElementById('tweet-button').addEventListener('click', function() {
        const tweetInput = document.getElementById('tweet-input');
        const newTweet = {
            user: 'Somebody @somewhere157', 
            text: tweetInput.value,
            profileImage: 'assets/arya-dubey-8eYI8qcEFxI-unsplash.jpg', 
            likes: 0,
            retweets: 0
        };
        if (newTweet.text.trim()) {
            addTweet(newTweet);
            tweetInput.value = '';
        }
    });

});