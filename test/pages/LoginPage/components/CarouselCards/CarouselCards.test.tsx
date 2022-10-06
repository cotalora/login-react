import React from 'react';
import { render, screen } from '@testing-library/react';
import { CarouselCards } from '../../../../../src/pages/LoginPage/components/CarouselCards/CarouselCards';
import { Opinion } from '../../../../../src/pages/LoginPage/interfaces';

describe('Pruebas unitarias a componente CarouselCards', () => {

    const opinion: Opinion = {
        opinion: '¡Simplemente increible! Estoy realmete sarisfecho con mi proyecto y mi negocio. Esto es absolutamente fantastico',
        image: 'src/assets/img/1.jpg',
        name: 'Timson Q.',
        job: 'Developer Freelanzer Jr',
    }

    beforeEach(() => {
        render(<CarouselCards />);
    });

    test(`Se debe presentar el nombre de usuario ${opinion.name}`, () => {
        expect(screen.getByText(opinion.name)).toBeInTheDocument();
    });

    test(`Se debe presentar el trabajo del usuario ${opinion.job}`, () => {
        expect(screen.getByText(opinion.job)).toBeInTheDocument();
    });

    test(`Se debe presentar la imágen del usuario para el avatar según el alt`, () => {
        expect(screen.getByAltText(opinion.name)).toBeInTheDocument();
    });

    test(`Se debe presentar la imágen del usuario para el avatar según el src`, () => {
        const image = screen.getByAltText(opinion.name);
        expect(image.getAttribute('src')).toEqual(opinion.image);
    });

    test(`Se debe presentar la opinión del usuario ${opinion.opinion}`, () => {
        expect(screen.getByText(opinion.opinion)).toBeInTheDocument();
    });

    test(`Se debe presentar dos contenedores de opinión`, async () => {
        const opinions = await screen.findAllByLabelText(/opinion-container/i);
        expect(opinions.length).toEqual(2);
    });
})