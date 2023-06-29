import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title = 'unknown', stats = 'unknown' }) => (
  <section className={css.statistics}>
    {title === 'unknown' ? '' : <h2 className={css.title}>{title}</h2>}
    <ul className={css.stat_list}>
      {stats === 'unknown'
        ? 'No data'
        : stats.map(stat => (
            <li
              key={stat.id}
              className={css[stat.label.slice(1, stat.label.length)]}
            >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

//-----------------------------------------------------------------------------------------------------------
//   2- Sekcja "statystyki"

//   Utwórz komponent <Statistics>, który wyświetlałby statystyki zgodnie z przekazanymi propsami, na przykład: ładowanie w chmurze zgodnie z rodzajem pliku, odwiedziny strony internetowej przez użytkowników z różnych państw, nakłady finansowe i tym podobne. Informacje o statystykach znajdują się w pliku data.json.

//   Opis komponentu <Statistics>

//   Komponent powinien przyjmować dwa propsy title i stats, w których wyświetla się nagłówek i obiekt statystyk.

// title - nie jest obowiązkowy i jeśli nie został przekazany, widok nagłówka nie powinien się renderować <h2>.
// stats - tablica obiektów zawierających informacje o elemencie statystyki. Może mieć dowolną ilość elementów.
// Kolor tła elementu statystyki można pominąć albo stworzyć funkcję do generowania losowego koloru.
// Komponent powinien tworzyć element DOM o następującej strukturze:

// <section class="statistics">
//   <h2 class="title">Upload stats</h2>

//   <ul class="stat-list">
//     <li class="item">
//       <span class="label">.docx</span>
//       <span class="percentage">4%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp3</span>
//       <span class="percentage">14%</span>
//     </li>
//     <li class="item">
//       <span class="label">.pdf</span>
//       <span class="percentage">41%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp4</span>
//       <span class="percentage">12%</span>
//     </li>
//   </ul>
// </section>

// Przykład wykorzystania
// import data from '/path/to/data.json';

// <Statistics title="Upload stats" stats={data} />
// <Statistics stats={data} />
