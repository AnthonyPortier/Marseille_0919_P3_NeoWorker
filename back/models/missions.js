'use strict';
module.exports = (sequelize, DataTypes) => {
  const missions = sequelize.define('missions', {
    nom_mission:DataTypes.STRING,
    nom_entreprise:DataTypes.STRING,

    email: DataTypes.STRING,

    note: DataTypes.STRING,

    nb_j_par_mois: DataTypes.INTEGER,
    type_profil:DataTypes.STRING, //expert moyen..

    numero_siret: DataTypes.INTEGER,
    budget: DataTypes.INTEGER,
    date_debut:DataTypes.DATE,
    date_fin:DataTypes.DATE,
    frequence:DataTypes.STRING,
    status:DataTypes.INTEGER,
    address:DataTypes.STRING,
    mobilite: DataTypes.BOOLEAN,
    km_max: DataTypes.INTEGER,
    siret: DataTypes.INTEGER,
    tel: DataTypes.INTEGER,
    cp:DataTypes.INTEGER,
    pref_lieu_de_travail: DataTypes.INTEGER,
    disponibilite: DataTypes.INTEGER,
    excel: DataTypes.INTEGER,
    powerpoint: DataTypes.INTEGER,
    word: DataTypes.INTEGER,
    microsoft_365: DataTypes.INTEGER,
    crm_hubspot: DataTypes.INTEGER,
    crm_salesforce: DataTypes.INTEGER,
    crm_pipedrive: DataTypes.INTEGER,
    crm: DataTypes.INTEGER,
    suite_adobe: DataTypes.INTEGER,
    illustrator: DataTypes.INTEGER,
    in_design: DataTypes.INTEGER,
    photoshop: DataTypes.INTEGER,
    marketing_fb: DataTypes.INTEGER,
    google_adwards: DataTypes.INTEGER,
    insta: DataTypes.INTEGER,
    reseaux_sociaux: DataTypes.INTEGER,
    keynote: DataTypes.INTEGER,
    pages: DataTypes.INTEGER,
    gsuite_google: DataTypes.INTEGER,
    numbers: DataTypes.INTEGER,
    erp_sap: DataTypes.INTEGER,
    ciel_gestion: DataTypes.INTEGER,
    cegid: DataTypes.INTEGER,
    sage_gestion_commercial: DataTypes.INTEGER,
    sage_comptabilite: DataTypes.INTEGER,
    quadra: DataTypes.INTEGER,
    reso_pb: DataTypes.INTEGER,
    confiance: DataTypes.INTEGER,
    empathie: DataTypes.INTEGER,
    intelligence_emo: DataTypes.INTEGER,
    communication: DataTypes.INTEGER,
    gestion_temps: DataTypes.INTEGER,
    gestion_stress: DataTypes.INTEGER,
    creativite: DataTypes.INTEGER,
    esprit_entre: DataTypes.INTEGER,
    audace: DataTypes.INTEGER,
    vision_visu: DataTypes.INTEGER,
    motivation: DataTypes.INTEGER,
    presence: DataTypes.INTEGER,
    sens_collectif: DataTypes.INTEGER,
    curiosite: DataTypes.INTEGER,
    sens_effort: DataTypes.INTEGER,
    sport: DataTypes.STRING,
    passion: DataTypes.STRING,
    engagement_asso: DataTypes.STRING,
    autres_softskill: DataTypes.STRING,
    gestion_admin_compta: DataTypes.INTEGER,
    gestion_op: DataTypes.INTEGER,
    gestion_commerciale: DataTypes.INTEGER,
    marketing_com_digit: DataTypes.INTEGER,
    gestion_fi_controle_gestion: DataTypes.INTEGER,
    dsi: DataTypes.INTEGER,
    gestion_rh_juridique: DataTypes.INTEGER,
    gestion_rel_client: DataTypes.INTEGER,
    francais: DataTypes.INTEGER,
    anglais: DataTypes.INTEGER,
    italien: DataTypes.INTEGER,
    chinois: DataTypes.INTEGER,
    russe: DataTypes.INTEGER,
    arabe: DataTypes.INTEGER,
    allemand: DataTypes.INTEGER,
        
    espagnol: DataTypes.INTEGER,

    autres_langue: DataTypes.STRING,
    

  }, {});

  //table de jointures
  missions.associate = function(models) {
    missions.belongsToMany(models.users, {
      through: 'tj_users_missions'
    })
    missions.belongsToMany(models.freelancer,{
      through: 'tj_missions_f'
    })
  };
  return missions;
};