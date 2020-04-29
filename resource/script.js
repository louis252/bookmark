function page(num){
  var pic1, pic2,pic3, pic4, pic5, pic6;
  var title1, title2, title3, title4, title5, title6;
  var desc1, desc2, desc3, desc4, desc5, desc6;

  if(num == 0){
    pic1 = "resource/image/comic/detective-conan.png"
    pic2 = "resource/image/comic/naruto.jpg"
    pic3 = "resource/image/comic/one-piece.png"
    pic4 = "resource/image/novel/harry-potter.jpg"
    pic5 = "resource/image/novel/narnia.jpg"
    pic6 = "resource/image/novel/red-rising.jpg"

    title1 = "Detective Conan"
    title2 = "Naruto"
    title3 = "One Piece"
    title4 = "Harry Potter"
    title5 = "The Chronicles of Narnia"
    title6 = "Red Rising"

    desc1 = "Detective Conan, is a Japanese detective manga series written and illustrated by Gosho Aoyama. It has been serialized in Shogakukan's Weekly Shōnen Sunday since January 19, 1994, and has been collected..."
    desc2 = "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks to gain recognition from his peers and also dreams of becoming the Hokage..."
    desc3 = "One Piece is a Japanese shōnen manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's Weekly Shōnen Jump magazine since July 22, 1997, and has been collected into 96 volumes..."
    desc4 = "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley..."
    desc5 = "The Chronicles of Narnia is a series of fantasy novels by British author C. S. Lewis. Written by Lewis, illustrated by Pauline Baynes, and originally published in London between 1950 and 1956, The Chronicles..."
    desc6 = "Red Rising is a 2014 science fiction dystopian novel by American author Pierce Brown, and the first book and eponym of a series. The novel, set on a future planet Mars, follows lowborn miner Darrow..."

    document.getElementById('p1').style.color = "#5f5f5f";
    document.getElementById('p2').style.color = "black";
  }else{
    pic1 = "resource/image/movie/green-mile.jpg"
    pic2 = "resource/image/movie/good-will.jpg"
    pic3 = "resource/image/movie/shawshank.jpg"
    pic4 = "resource/image/series/friends.jpg"
    pic5 = "resource/image/series/malcolm.jpeg"
    pic6 = "resource/image/series/himym.jpg"

    title1 = "The Green Mile"
    title2 = "Good Will Hunting"
    title3 = "The Shawshank Redemption"
    title4 = "Friends"
    title5 = "Malcolm In The Middle"
    title6 = "How I Met Your Mother"

    desc1 = "Paul Edgecomb, the head guard of a prison, meets an inmate, John Coffey, a black man who is accused of murdering two girls. His life changes drastically when he discovers that John has a special..."
    desc2 = "Will Hunting, a genius in mathematics, solves all the difficult mathematical problems. When he faces an emotional crisis, he takes help from psychiatrist Dr Sean Maguireto, who helps him recover..."
    desc3 = "Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner..."
    desc4 = "Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures with one another. Follows their personal and professional daily lives with their friends as they make troubles..."
    desc5 = "Malcolm in the Middle follows a dysfunctional family in an anonymous location. The family is headed by super-stressed supermom Lois, and eccentric child-at-heart Hal. The eldest son, Francis, once a wild youth..."
    desc6 = "Ted Mosby, an architect, recounts to his children the events that led him to meet their mother. His journey is made more eventful by the presence of his friends Lily, Marshall, Robin and Barney..."

    document.getElementById('p1').style.color = "black";
    document.getElementById('p2').style.color = "#5f5f5f";
  }
  document.getElementById('img1').src = pic1;
  document.getElementById('img2').src = pic2;
  document.getElementById('img3').src = pic3;
  document.getElementById('img4').src = pic4;
  document.getElementById('img5').src = pic5;
  document.getElementById('img6').src = pic6;

  document.getElementById('title1').innerHTML = title1;
  document.getElementById('title2').innerHTML = title2;
  document.getElementById('title3').innerHTML = title3;
  document.getElementById('title4').innerHTML = title4;
  document.getElementById('title5').innerHTML = title5;
  document.getElementById('title6').innerHTML = title6;

  document.getElementById('desc1').innerHTML = desc1;
  document.getElementById('desc2').innerHTML = desc2;
  document.getElementById('desc3').innerHTML = desc3;
  document.getElementById('desc4').innerHTML = desc4;
  document.getElementById('desc5').innerHTML = desc5;
  document.getElementById('desc6').innerHTML = desc6;
}
