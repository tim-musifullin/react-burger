import React from 'react';
import styles from './IngredientDetails.module.scss';
import PropTypes from 'prop-types';

const IngredientDetails = ({ ingredient }) => {
  return (
    <div className={styles.ingredient}>
      <img src={ingredient.image_large} alt='Ingredient' />
      <p className={`text text_type_main-medium`}>{ingredient.name}</p>
      <div className={styles.specification}>
        <section className={styles.item}>
          <p className={`text text_type_main-default text_color_inactive`}>Калории,ккал</p>
          <p className={`${styles.number} text text_type_digits-default text_color_inactive`}>
            {ingredient.calories}
          </p>
        </section>
        <section className={styles.item}>
          <p className={`text text_type_main-default text_color_inactive`}>Белки, г</p>
          <p className={`${styles.number} text text_type_digits-default text_color_inactive`}>
            {ingredient.proteins}
          </p>
        </section>
        <section className={styles.item}>
          <p className={`text text_type_main-default text_color_inactive`}>Жиры, г</p>
          <p className={`${styles.number} text text_type_digits-default text_color_inactive`}>
            {ingredient.fat}
          </p>
        </section>
        <section className={styles.item}>
          <p className={`text text_type_main-default text_color_inactive`}>Углеводы, г</p>
          <p className={`${styles.number} text text_type_digits-default text_color_inactive`}>
            {ingredient.carbohydrates}
          </p>
        </section>
      </div>
    </div>
  );
};

IngredientDetails.propTypes = {
  ingredient: PropTypes.shape({
    colories: PropTypes.number,
    carbohydrates: PropTypes.number,
    fat: PropTypes.number,
    image: PropTypes.string.isRequired,
    image_large: PropTypes.string,
    image_mobile: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    proteins: PropTypes.number,
    type: PropTypes.string,
  })
}

export default IngredientDetails;