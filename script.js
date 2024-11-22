function showResume() {
    const modal =  document.getElementById("resumeModal");
      document.getElementById("resumeModal").style.display = "block";
      //document.getElementById("resumeicon").style.display = "block";
      
      modal.classList.add("open"); // Add open state
      modal.classList.remove("minimized"); // Ensure minimized state is removed
      
  
  }
  
  function closeResume() {
      document.getElementById("resumeModal").style.display = "none";
      document.getElementById("resumeicon").style.display = "none";
  }
  
  function minimizeresume () {
      const modal = document.getElementById("resumeModal");
      document.getElementById("resumeModal").style.display = "none";
      document.getElementById("resumeicon").style.display = "block";
  
      modal.classList.add("minimized"); // Add minimized state
      setTimeout(() => {
          modal.style.display = "none";
          modal.classList.remove("open"); // Ensure open state is removed
      }, 500); // Delay for animation to finish
  }
  
  function showEducation(){
      document.getElementById("Educationmodal").style.display = "block";
      document.getElementById("educationicon").style.display = "block";
  }
  
  function closeEducation(){
      document.getElementById("Educationmodal").style.display = "none";
      document.getElementById("educationicon").style.display = "none";
  }
  
  function minimizeEducation() {
      document.getElementById("Educationmodal").style.display = "none";
      document.getElementById("educationicon").style.display = "block";
  }
  
  function showProject(){
      document.getElementById("Projectmodal").style.display = "block";
      document.getElementById("projecticon").style.display = "block";
  }
  
  function closeProject(){
      document.getElementById("Projectmodal").style.display = "none";
      document.getElementById("projecticon").style.display = "none";
  }
  
  function minimizeProject(){
      document.getElementById("Projectmodal").style.display = "none";
      document.getElementById("projecticon").style.display = "block";
  }
  
  function showAboutMe(){
      document.getElementById("Educationmodal").style.display = "block";
      document.getElementById("educationicon").style.display = "block";
  }
  
  function closeAboutMe(){
      document.getElementById("Educationmodal").style.display = "none";
      document.getElementById("educationicon").style.display = "none";
  }
  
  function minimizeAboutMe() {
      document.getElementById("Educationmodal").style.display = "none";
      document.getElementById("educationicon").style.display = "block";
  }
  
  
  function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const timeString = `${hours}:${minutes}`;
      
      document.getElementById("clock").textContent = timeString;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  updateClock(); // Initial call to display time immediately
  
  
  function toggleStartMenu() {
      const startMenu = document.getElementById("startMenu");
      startMenu.style.display = startMenu.style.display === "block" ? "none" : "block";
  }
  
  function shutdown(){
      document.getElementById("shutdownscreen").style.display = "block";
      
  }
  
  
  