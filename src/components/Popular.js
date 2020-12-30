import React from 'react';
import {Link} from "react-router-dom";

const Popular=()=>{
    return(
        <div  style={{marginLeft: 20 ,fontFamily:"serif",fontSize:18}}>
        <h5>5 Novels Considered the “Greatest Book Ever Written”</h5>
        <h6><b>Anna Karenina</b></h6>
        <img src="https://cdn.britannica.com/s:800x1000/82/175382-050-8B76E4A8/Greta-Garbo-Anna-Karenina-Clarence-Brown.jpg" alt ="" height={200} width={150}  />
        <p>Any fan of stories that involve juicy subjects like adultery, gambling, marriage plots, and, well, 
            Russian feudalism, would instantly place Anna Karenina at the peak of their “greatest novels” list. 
            And that’s exactly the ranking that publications like Time magazine have given the novel since it was
             published in its entirety in 1878. Written by Russian novelist Leo Tolstoy, the eight-part towering 
             work of fiction tells the story of two major characters: a tragic, disenchanted housewife, the titular
              Anna, who runs off with her young lover, and a lovestruck landowner named Konstantin Levin, who struggles
               in faith and philosophy. Tolstoy molds together thoughtful discussions on love, pain, and family in Russian 
               society with a sizable cast of characters regarded for their realistic humanity. The novel was especially 
               revolutionary in its treatment of women, depicting prejudices and social hardships of the time with vivid 
               emotion.</p>
               <h6><b>To Kill a Mockingbird</b></h6>
        <img src="https://cdn.britannica.com/s:800x1000/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg" alt ="" height={200} width={150}  />
        <p>Harper Lee, believed to be one of the most influential authors to have ever existed, famously published only a single novel (up until its controversial sequel was published in 2015 just before her death). Lee’s To Kill a Mockingbird was published in 1960 and became an immediate classic of literature. The novel examines racism in the American South through the innocent wide eyes of a clever young girl named Jean Louise (“Scout”) Finch. Its iconic characters, most notably the sympathetic and just lawyer and father Atticus Finch, served as role models and changed perspectives in the United States at a time when tensions regarding race were high. To Kill a Mockingbird earned the Pulitzer Prize for fiction in 1961 and was made into an Academy Award-winning film in 1962, giving the story and its characters further life and influence over the American social sphere.</p>
        <img src="https://cdn.britannica.com/s:800x1000/47/24647-050-E6E25F22/F-Scott-Fitzgerald.jpg" alt ="" height={200} width={150}  />
        <p> F. Scott Fitzgerald’s The Great Gatsby is distinguished as one of the greatest texts for introducing students to the art of reading literature critically (which means you may have read it in school). The novel is told from the perspective of a young man named Nick Carraway who has recently moved to New York City and is befriended by his eccentric nouveau riche neighbor with mysterious origins, Jay Gatsby. The Great Gatsby provides an insider’s look into the Jazz Age of the 1920s in United States history while at the same time critiquing the idea of the “American Dream.” Perhaps the most-famous aspect of the novel is its cover art—a piercing face projected onto a dark blue night sky and lights from a cityscape—an image that is also found, in a slightly different configuration, within the text itself as a key symbol.</p>
        
        </div>
    );

};

export default Popular;