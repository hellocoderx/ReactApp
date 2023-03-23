import logo from './logo.svg';
import './App.css';
const poxy = 4222;
const singer = { name1: 'Dr.Mafijor', job: 'singer' };
const singerStyle = {
    color: 'purple',
    backgroundColor: 'white'
}

function App() {
    const nayoks = ['Rubel', 'Bapparaj', 'Kuber', 'josim', 'salman Sha'];
    return ( <
            div className = "App" > {
                nayoks.map(nayok => < li > { nayok } < /li>)
                } {
                    nayoks.map(nayok => < person > < /person>)
                    }

                    <
                    Person name = { nayoks[0] }
                    job = "Web designer" > < /Person> <
                    Person name = { nayoks[1] }
                    job = "React Developer" > < /Person> <
                    Person name = "Emon Khan"
                    job = "Java Developer" > < /Person> <
                    Person name = "Ridoy Hassan"
                    job = "Android Developer" > < /Person> <
                    Person name = "Rofikul Islam"
                    job = "Apple Developer" > < /Person> <
                    Person name = "Rubel"
                    job = "Linux Developer" > < /Person> <
                    Person name = "Rubel"
                    job = "Games Developer" > < /Person>

                    <
                    h5 > New Compunet: Yeh < /h5> <
                    p > Rock Mama React Mama < /p> <
                    Friends > < /Friends> < /
                        div >
                );
            }


            function Person(props) {
                console.log(props);
                return ( <
                    div className = "person" >
                    <
                    h2 > { props.name } < /h2> <
                    p > Profassion: { props.job } < /p> < /
                    div >
                )
            }

            function Friends() {
                return ( <
                    div className = 'container' >
                    <
                    h3 > Name: Ajoy Dev < /h3> <
                    p > Job: Maramari < /p> < /
                    div >
                )
            }
            export default App;