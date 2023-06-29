import PropTypes from 'prop-types';
import css from './Friendslist.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusOnline = isOnline ? 'online' : 'offline';
  return (
    <li className={css.item}>
      <span className={css[statusOnline]}></span>
      <img class={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export const Friendslist = ({ friends }) => (
  <ul className={css.friend_list}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

Friendslist.propTypes = {
  friends: PropTypes.array,
};

//------------------------------------------------------------------------------------------------------------
// 3 - Lista znazjomych
// Należy utworzyć komponent <FriendList>, przy pomocy którego moglibyśmy wyświetlać informacje o znajomych użytkownika. Dane dotyczące znajomych znajdują się w pliku friends.json.

// Opis komponentu <FriendList>
// Komponent powinien przyjmować jeden props friends – tablicę obiektów przyjaciół.

// Komponent powinien tworzyć DOM o następującej strukturze:
// <ul class="friend-list">
//   <!-- Dowolna ilość FriendListItem -->
// </ul>
// Opis komponentu <FriendListItem>
// Komponent powinien przyjmować kilka propsów:

// avatar - odnośnika do awataru
// name - imię znajomego
// isOnline - wartość boolowska informująca o statusie – czy jest w sieci.
// W zależności od propsu isOnline, powinien zmieniać się kolor tła span.status. Można to zrobić poprzez różne klasy CSS lub Styled Components.

// Komponent powinien tworzyć DOM o następującej strukturze:

// <li class="item">
//   <span class="status"></span>
//   <img class="avatar" src="" alt="User avatar" width="48" />
//   <p class="name"></p>
// </li>

// Przykład wykorzystania
// import friends from 'path/to/friends.json';

// <FriendList friends={friends} />;
