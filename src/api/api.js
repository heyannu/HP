import axios from 'axios'

const key = "$2a$10$xTIvrwwu9G4KVPDq/luameBeYgRLO884uKz4sMvxW78GPOOsCHNcm"

export const houseData = async () => {
    try {
        var data = await axios.get(`https://www.potterapi.com/v1/houses`,
            {
                params:
                    { key: key }
            })
        return (data)
    }
    catch (err) {
        console.log(err)
    }
}

export const sortingHat = async () => {
    try {
        var data = await axios.get(`https://www.potterapi.com/v1/sortingHat`)
        return (data)
    }
    catch (err) {
        console.log(err)
    }
}

export const characterData = async (param) => {
    try {
        var data = await axios.get(`https://www.potterapi.com/v1/characters`,
            {
                params:
                    { key: key}
            })
        return (data)
    }
    catch (err) {
        console.log(err)
    }
}

export const spellData = async (param) => {
    try {
        var data = await axios.get(`https://www.potterapi.com/v1/spells`,
            {
                params:
                    { key: key}
            })
        return (data)
    }
    catch (err) {
        console.log(err)
    }
}
