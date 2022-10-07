import { useGetCharacterByIdQuery, useGetCharactersQuery } from "../../store/api/rickAndMortyApi/rickAndMortyApi";
import { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import './RickRTKPage.scss';
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setLoading, unsetLoading } from "../../store/slices";
import { AnimatedIcon } from "../../components";

export const RickRTKPage = () => {

    const dispatch = useAppDispatch();
    const [characterId, setCharacterId] = useState(1);

    const { data: characters, isLoading: isLoadingCharacters } = useGetCharactersQuery();
    const { data: character, isLoading: isLoadingCharacter } = useGetCharacterByIdQuery(characterId);

    const prevCharacter = () => {
        if (characterId === 1) return;
        setCharacterId(characterId - 1);
    }
    const nextCharacter = () => {
        setCharacterId(characterId + 1);
    }

    useEffect(() => {
        isLoadingCharacters && dispatch(setLoading())
        !isLoadingCharacters && dispatch(unsetLoading())
    }, [isLoadingCharacters]);

    useEffect(() => {
        isLoadingCharacter && dispatch(setLoading())
        !isLoadingCharacter && dispatch(unsetLoading())
    }, [isLoadingCharacter]);

    return (
        <>
            <Box className="general-container">
                <Box className="specific-character-container">
                    <Box className="img-container">
                        <img src={character?.image} alt={character?.name} />
                        <Box className="button-container">
                            <IconButton id="left-button" className="left-button" onClick={prevCharacter}>
                                <AnimatedIcon
                                    target='#left-button'
                                    trigger='hover'
                                    src='../../src/assets/icons/arrow-icon.json'
                                    colors={{ primary: '#3C37FF', secondary: '#3C37FF' }}
                                />
                            </IconButton>
                            <IconButton id="right-button" className="right-button" onClick={nextCharacter}>
                                <AnimatedIcon
                                    target='#right-button'
                                    trigger='hover'
                                    src='../../src/assets/icons/arrow-icon.json'
                                    colors={{ primary: '#3C37FF', secondary: '#3C37FF' }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box className="button-title-container">
                        <span>{character?.name}</span>
                        <p>{character?.name} Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio itaque, perspiciatis nihil deleniti vel repudiandae minima velit necessitatibus eum! Incidunt unde possimus in totam! Dolorem eligendi minima hic sed voluptate!</p>
                    </Box>
                </Box>
                <Box className="character-list-container">
                    {
                        characters?.results.map(({ id, image, name }) => (
                            <Box className="character-box" key={id}>
                                <img src={image} alt={name} />
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </>
    )
}
