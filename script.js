function showSchoolProjects() {
    document.getElementById('school-projects').style.display = 'flex';
    document.getElementById('perso-projects').style.display = 'none';
  }
  
  function showPersoProjects() {
    document.getElementById('school-projects').style.display = 'none';
    document.getElementById('perso-projects').style.display = 'flex';
  }

  function showSAE104() {
    document.getElementById('SAE104').style.display = 'block';
    document.getElementById('SAE204').style.display = 'none';
  }

  function showSAE204() {
    document.getElementById('SAE104').style.display = 'none';
    document.getElementById('SAE204').style.display = 'block';
  }

  function showSAE103() {
    document.getElementById('SAE103').style.display = 'block';
    document.getElementById('SAE203').style.display = 'none';
  }
  
  function showSAE203() {
    document.getElementById('SAE103').style.display = 'none';
    document.getElementById('SAE203').style.display = 'block';
  }

  function show1erannee() {
    document.getElementById('1er').style.display = 'block';
    document.getElementById('2eme').style.display = 'none';
  }
  
  function show2emeannee() {
    document.getElementById('1er').style.display = 'none';
    document.getElementById('2eme').style.display = 'block';
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }