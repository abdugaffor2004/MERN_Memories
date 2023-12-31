import { makeStyles } from 'tss-react/mui'

export default makeStyles()( (theme) => ({
    appBar:{
        borderRadius: 10,
        margin: '30px 0', 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    heading: {
        color: 'rgba(0, 183, 255, 1)'
    },

    image:{
        marginLeft: '15px',
        
    },

    form:{
        position: 'sticky',
        top: 0,
    },

    mainContainer:{
        [theme.breakpoints.down('sm')]:{
            flexDirection: "column-reverse"
        }
        
    }

    
}))