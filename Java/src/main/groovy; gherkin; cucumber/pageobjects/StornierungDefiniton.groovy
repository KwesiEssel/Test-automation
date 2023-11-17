@Wenn( der Kunde auf next-bahn.de die Sofortstornienung für das Bundeswehrticket durchführt)
Public void der_Kunde_auf_next_bahn_de_die_Sofortstornierung_fuer_das_Bundeswehrticket_durchfuehrt(){
StornierungVendo.ndbSofortstornierung.click()
StornierungVendo.btnStornierenBundeswehr_click()
StornierungVendo.btnStornoBestaetigen.waitUntilisVisible().click()
}
