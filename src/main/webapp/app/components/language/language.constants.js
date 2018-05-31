(function () {
    'use strict';

    angular
        .module('jeanne2App')

        /*
         Languages codes are ISO_639-1 codes, see http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
         They are written in English to avoid character encoding issues (not a perfect solution)
         */
        .constant('LANGUAGES', [
            'ar-ly',
            'fr',
            'es',
            'en'
            // jhipster-needle-i18n-language-constant - JHipster will add/remove languages in this array
        ]
    );
})();
