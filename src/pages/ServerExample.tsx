import axios from "axios";
import { useEffect, useState } from "react";
import UserItem from "../component/item/UserItem";
import CommonList from "../component/list/CommonList";
import UserList from "../component/list/UserList";
import { IUser } from "../types/ItemInterfaces";

const Nav1Example = () => {
  /*
  const defaultUsers: IUser[] = [
    { id: 1, name:"User 1", email: "fake1@fake.fake", address: {street: "Street1", city: "City1", zipcode: "1000-0001" } },
    { id: 2, name:"User 2", email: "fake2@fake.fake", address: {street: "Street2", city: "City2", zipcode: "2000-0002" } },
    { id: 3, name:"User 3", email: "fake3@fake.fake", address: {street: "Street3", city: "City3", zipcode: "3000-0003" } },
    { id: 4, name:"User 4", email: "fake4@fake.fake", address: {street: "Street4", city: "City4", zipcode: "4000-0004" } },
    { id: 5, name:"User 5", email: "fake5@fake.fake", address: {street: "Street5", city: "City5", zipcode: "5000-0005" } }
  ];
  */
  const [users, setUsers] = useState<IUser[]>([]);
  
  useEffect(
    () => { downloadUsers() },
    [] // Run method on component mount stage
  );

  async function downloadUsers() {
    try {
      const resp = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
      setUsers(resp.data);
    } catch {
      alert("Error while users dounload from https://jsonplaceholder.typicode.com");
    } finally {
      console.log("Data loaded from jsonplaceholder.typicode.com");
    }
  }
  
  return (
    <div className="container">
      <h2 className='centered'>Server example</h2>
      <p>Create state for users storing:</p>
      <p>const [users, setUsers] = useState&lt;IUser[]&gt;([]);</p>
      <br/>
      <p>Add function for dounloading:</p>
      <p>async function downloadUsers() &#123;</p>
      <p className="marginLeft20">...</p>
      <p className="marginLeft20">const resp = await axios.get&lt;IUser[]&gt;("https://jsonplaceholder.typicode.com/users");</p>
      <p className="marginLeft20">...</p>
      <p>&#125;</p>

      <UserList users={users} />
      
      <h3 className="centered paddingTop35">List of users (output using generic)</h3>
      <br />
      <h5>Generic for a work with Common Types:</h5>
      <br />
      <p>export default function CommonList&lt;T&gt;(props: CommonListProps&lt;T&gt;) &#123;</p>
      <p style={{marginLeft:20}}>return (</p>
      <p style={{marginLeft:40}}>&lt;div&gt;</p>
      <p style={{marginLeft:60}}>&#123;props.items.map(props.renderItem)&#125;</p>
      <p style={{marginLeft:40}}>&lt;/div&gt;</p>
      <p style={{marginLeft:20}}>);</p>
      <p>&#125;</p>
      <br />
      <p>interface CommonListProps&lt;T&gt; &#123;</p>
      <p style={{marginLeft:20}}>items: T[],</p>
      <p style={{marginLeft:20}}>renderItem: (item: T) =&gt; React.ReactNode;</p>
      <p>&#125;</p>
      <br />
      
      <CommonList items={users} 
                  renderItem={
                    item => 
                    <div key={item.id}><i>{item.id}. {item.name}</i></div>
                  }
      />
      
      <h3 className="centered paddingTop35">Output available info about users using Typed Item</h3>
      <p className="centered"><i>See ServerExample.tsx, UserItem.tsx</i></p>
      <br/>
      
      <CommonList   items={users} 
                    renderItem={
                      (u: IUser) => 
                      <UserItem key={u.id} user={u} />
                    }
      />
    </div>
  );
}
  
export default Nav1Example;
