import { useGetCharacterByIdQuery, useGetCharactersQuery } from "../../store/api/rickAndMortyApi/rickAndMortyApi";
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import './RickRTKPage.scss';
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setLoading, unsetLoading } from "../../store/slices";

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
                        <button onClick={prevCharacter}>Previous</button>
                        <button onClick={nextCharacter}>Next</button>
                    </Box>
                </Box>
                <Box className="button-title-container">
                    <span>{character?.name}</span>
                    <p>{character?.name} Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio itaque, perspiciatis nihil deleniti vel repudiandae minima velit necessitatibus eum! Incidunt unde possimus in totam! Dolorem eligendi minima hic sed voluptate!</p>
                </Box>
            </Box>
            <Box className="character-list-container">
                {
                    characters?.results.map(({id, image, name}) => (
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
