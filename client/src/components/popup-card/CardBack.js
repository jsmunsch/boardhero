import React from "react";
import CollectionItemPositioned from "./GamePositioned";
import CardGameName from "./GameName";
import DetailButton from "./DetailButton";
import Grid from "./Grid";
import Rating from "react-rating";
import StarRatingFull from "../../icons/StarRatingFull";
import StarRatingEmpty from "../../icons/StarRatingEmpty";
import RatingContainer from "./RatingContainer";
import ModalContainer from "./ModalContainer";
import DescriptionContainer from "./DescriptionContainer";

export default function CardBack({ singleGame, setShowBack, showBack }) {
  return (
    <ModalContainer>
      <CollectionItemPositioned src={singleGame.image_url} />
      <RatingContainer>
        <Rating
          initialRating={singleGame.average_user_rating}
          readonly
          fullSymbol={<StarRatingFull />}
          emptySymbol={<StarRatingEmpty />}
        />
        <span>({singleGame.num_user_ratings})</span>
      </RatingContainer>
      <Grid>
        <span></span>
        <CardGameName>Description</CardGameName>
        <DescriptionContainer>
          <span
            dangerouslySetInnerHTML={{ __html: singleGame.description }}
          ></span>
        </DescriptionContainer>
        <DetailButton onClick={() => setShowBack(!showBack)} />
      </Grid>
    </ModalContainer>
  );
}
