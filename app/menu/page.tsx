import MenuStandard from "../components/Menu/MenuStandard";
import MenuSecondary from "../components/Menu/MenuSecondary";
import ProjectMessages from "../JSON/ProjectMessages";
export default function Menu() {
  return (
    <div className="min-h-screen bg-orange md:pb-32 pb-16">
      <MenuStandard
        title="Taiyaki"
        image="https://images.unsplash.com/photo-1582049786862-a4c5730b7160?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <div className="w-full">
          <ul className="w-3/5">
            {ProjectMessages.MenuTaiyaki.map((item, index) => (
              <li className="w-full flex justify-between mb-8">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </MenuStandard>
      <MenuStandard
        title="Soft Serve"
        image="https://images.unsplash.com/photo-1636564499112-6113e73c504a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <div className="w-full">
          <ul className="w-3/5">
            {ProjectMessages.MenuSoftServe.map((item, index) => (
              <li className="w-full flex justify-between mb-8">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </MenuStandard>
      <MenuStandard
        title="TAIYAKI SOFT SERVE"
        image="https://images.unsplash.com/photo-1636564499112-6113e73c504a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <div className="w-full">
          <ul className="w-4/5">
            {ProjectMessages.MenuSoftServe.map((item, index) => (
              <li className="w-full flex justify-between mb-8">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </MenuStandard>
      <MenuSecondary
        title="DRINKS"
        image="https://images.unsplash.com/photo-1589638895165-e80df3583854?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <div className="w-full">
          <ul className="w-4/5">
            {ProjectMessages.MenuSoftServe.map((item, index) => (
              <li className="w-full flex justify-between mb-8">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </MenuSecondary>
    </div>
  );
}
