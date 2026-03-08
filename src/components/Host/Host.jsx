import "./Host.scss";

function Host({ host }) {
  const [firstName, lastName] = host.name.split(" ");

  return (
    <div className="host">
      <div className="host__info">
        <span className="host__name">
          {firstName}
          <br />
          {lastName}
        </span>

        <img className="host__picture" src={host.picture} alt={host.name} />
      </div>
    </div>
  );
}

export default Host;
