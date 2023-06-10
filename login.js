const App = () => {
    const [notes, setNotes] = useState([]) 
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('') 
  
    useEffect(() => {
      noteService
        .getAll().then(initialNotes => {
          setNotes(initialNotes)
        })
    }, [])
  
    // ...
  
    const handleLogin = (event) => {
      event.preventDefault()
      console.log('logging in with', username, password)}}

