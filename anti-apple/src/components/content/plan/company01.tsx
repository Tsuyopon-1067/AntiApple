import React from 'react';
import GenerateArticle from './generateArticle';

const company01 = () => {
    return (
        <div>
            <GenerateArticle 
                name="ahamo"
                img="https://cache.cil.ahamo.com/assets/images/common/logo.svg"
                abstract="ドコモのやつ"
                gb="20GB, 100GB"
                value="あいうえお"
                option="あいおうえ"
                speed="はやい"
                recommended="あいうえお"
                reference="あいうえお"
            />
        </div>
    );
};

export default company01;