import { useState, createContext, useContext } from 'react'


const Notification = ({type, message}) =>{
    const notificationStyle = {
      // position: 'absolute',
      // top: 100,
      // right: 50,
    backgroundColor: type === 'success' ? 'green' : 'red',
    color: 'white',
    padding: '10px 20px 10px 20px',
    borderRadius: 10,
    marginTop: '10px'
    }

    if(!message) return

    return (
        <div style={notificationStyle} >
            {message}
        </div>
    )
}

const NotificationContext = createContext()


export const NotificactionProvider = ({children}) => {
    
    const [notificationData, setNotificationData] = useState({
        type: 'error',
        text: ''
    })
    
    
    const setNotification = (type, text) => {
        setNotificationData({type, text})
        setTimeout(()=> {
            setNotification({type, text: ''})
        }, 3000)
    }
    


    return (
        <NotificationContext.Provider value={{setNotification}} >
            <Notification  type={notificationData.type} message={notificationData.text} />
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotificacion =  () => {
    return useContext(NotificationContext)
}

export default NotificactionProvider
